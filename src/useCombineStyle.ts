import { IAddProps, IAddPropsArray, TStyle } from './types';
import { useThemeContext } from './hooks/ThemeContext';
import { useWindowWidthBreakpoint } from './hooks/useWindowWidthBreakpoint';

interface IUseCompbineStyle {
  theme?: IAddProps['theme'],
  computedStyle: IAddProps['computedStyle'],
  rStyle?: IAddProps['rStyle'],
  style?: IAddPropsArray['style'],
  propsStyle?: TStyle,
}

const findInitial = (rStyle : undefined | { [breakpoint: string]: any }) => {
  if (!rStyle) return {
    initialBreakpoint: undefined,
    cleanedResponsiveStyle: rStyle,
  };
  let initial;
  const responsiveStyle = Object.assign({}, rStyle);
  for (let key in rStyle) {
    if (responsiveStyle[key].initial && !initial) {
      initial = key;
    }
    delete responsiveStyle[key].initial;
  }
  return {
    initialBreakpoint: initial,
    cleanedResponsiveStyle: responsiveStyle,
  }
}

export const useCombineStyle = ({ theme, rStyle, computedStyle, style, propsStyle } : IUseCompbineStyle) => {
  const [currentTheme] = useThemeContext();

  const {
    initialBreakpoint,
    cleanedResponsiveStyle,
  } = findInitial(rStyle);
  // @ts-ignore
  const breakpoint = useWindowWidthBreakpoint(Object.keys(rStyle || {}), initialBreakpoint);

  const responsiveStyle = cleanedResponsiveStyle && cleanedResponsiveStyle[breakpoint] ? cleanedResponsiveStyle[breakpoint] : {};

  const allStyle = Array.isArray(style) ? [
    (theme ? theme[currentTheme] : {}),
    responsiveStyle,
    computedStyle,
    propsStyle,
    ...style,
  ] : {
    ...(theme ? theme[currentTheme] : {}),
    ...computedStyle,
    ...propsStyle,
    ...responsiveStyle,
    ...style,
  };
  return allStyle;
};