import { IAddProps, IAddPropsArray, TStyle } from './types';
import { useThemeContext } from './hooks/ThemeContext';
import { useResponsiveStyle } from './hooks/useResponsiveStyle';
import { useWindowDimensions } from 'react-native';
import { useWindowWidthBreakpoint } from './hooks/useWindowWidthBreakpoint';

interface IUseCompbineStyle {
  theme?: IAddProps['theme'],
  computedStyle: IAddProps['computedStyle'],
  rStyle?: IAddProps['rStyle'],
  style?: IAddPropsArray['style'],
  propsStyle?: TStyle,
}

export const useCombineStyle = ({ theme, rStyle, computedStyle, style, propsStyle } : IUseCompbineStyle) => {
  const [currentTheme] = useThemeContext();
  // @ts-ignore
  const breakpoint = useWindowWidthBreakpoint(Object.keys(rStyle || {}));

  const responsiveStyle = rStyle && rStyle[breakpoint] ? rStyle[breakpoint] : {};

  const allStyle = Array.isArray(style) ? [
    (theme ? theme[currentTheme] : {}),
    responsiveStyle,
    computedStyle,
    propsStyle,
    ...style,
  ] : {
    ...(theme ? theme[currentTheme] : {}),
    ...responsiveStyle,
    ...computedStyle,
    ...propsStyle,
    ...style,
  };
  return allStyle;
};