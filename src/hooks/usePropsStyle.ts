import { useMemo } from 'react';

const styleProperties = ['alignContent', 'alignItems', 'alignSelf', 'aspectRatio', 'backfaceVisibility', 'backgroundColor', 'borderBottomColor', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderBottomWidth', 'borderColor', 'borderLeftColor', 'borderLeftWidth', 'borderRadius', 'borderRightColor', 'borderRightWidth', 'borderStyle', 'borderTopColor', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderTopWidth', 'borderWidth', 'bottom', 'color', 'decomposedMatrix', 'direction', 'display', 'elevation', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant', 'fontWeight', 'height', 'includeFontPadding', 'justifyContent', 'left', 'letterSpacing', 'lineHeight', 'margin', 'marginBottom', 'marginHorizontal', 'marginLeft', 'marginRight', 'marginTop', 'marginVertical', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'opacity', 'overflow', 'overlayColor', 'padding', 'paddingBottom', 'paddingHorizontal', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingVertical', 'position', 'right', 'rotation', 'scaleX', 'scaleY', 'shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'textAlign', 'textAlignVertical', 'textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textShadowColor', 'textShadowOffset', 'textShadowRadius', 'tintColor', 'top', 'transform', 'transformMatrix', 'translateX', 'translateY', 'width', 'writingDirection', 'zIndex'] as const;

type TStyleProperty = typeof styleProperties[number];

type TOneStyle = any;
export interface IObjectStyle {
  [styleName : string]: TOneStyle,
}

const hasNumber = (myString : string) : boolean => {
  return /\d/.test(myString);
};

type TPropStyle = {
  [key in TStyleProperty]? : unknown
}
export interface IProps extends TPropStyle {
  [key : string]: unknown,
}

export const propsToStyle = (props : IProps = {}) => {
  let style : TOneStyle = {};
  for (let key in props) {
    if (styleProperties.includes(key as TStyleProperty)) style[key] = props[key];
    else if (hasNumber(key)) { // make prop style with number, flex1 -> flex: 1
      let matchArr = key.match(/\d+/g);
      if (matchArr != null && matchArr.length === 1 && key.indexOf(matchArr[0]) === key.length - matchArr[0].length) {
        const numberValue = Number(matchArr[0]);
        const propertyValue = key.substring(0, key.indexOf(matchArr[0]));
        if (styleProperties.includes(propertyValue as TStyleProperty)) {
          const styleObject = {
            [propertyValue]: numberValue,
          };
          style = (<any>Object).assign(style, styleObject);
        }
      }
    }
  }
  return style;
};

export const usePropsStyle = (props : any) => {
  return useMemo(() => {
    return propsToStyle(props);
  }, [props]);
};