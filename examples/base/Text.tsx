import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { FONT } from 'const';
import { QuickComponent, IStyleProps, IAddProps } from 'quickly-react';
import { addCommonStyle, TCommonPropStyle } from './addCommonStyle';

const quickComponent = new QuickComponent();
quickComponent.tagName = 'Text';
addCommonStyle(quickComponent);

const textStyle = {
  bold: {
    fontFamily: FONT.bold,
  },
  semiBold: {
    fontFamily: FONT.semiBold,
  },
  extraBold: {
    fontFamily: FONT.extraBold,
  },
  black: {
    fontFamily: FONT.black,
  },
  thin: {
    fontFamily: FONT.thin,
  },
  light: {
    fontFamily: FONT.light,
  },
  medium: {
    fontFamily: FONT.medium,
  },
  center: {
    textAlign: 'center',
  },
  colorWhite: {
    color: 'white',
  },
};

for (let key in textStyle) {
  quickComponent.addProps(key, {
    style: textStyle[key],
  });
}

const regular = quickComponent.addProps('regular', {
  style: {
    fontFamily: FONT.defaultFont,
  },
});
const colorDefault = quickComponent.addProps('colorDefault', {
  style: {
    color: '#383838',
  },
});
quickComponent.setupDefaultProps([regular, colorDefault], {
  shouldDetectStyleProps: true,
});

interface IResponsiveStyle {
  [name: string]: IAddProps;
}
const responsiveStyle: IResponsiveStyle = {
  h1: {
    props: {
      bold: true,
    },
    rStyle: {
      lg: { fontSize: 48 },
      md: { fontSize: 36 },
      xs: { fontSize: 30 },
    },
  },
  h2: {
    props: {
      bold: true,
    },
    rStyle: {
      lg: { fontSize: 36 },
      md: { fontSize: 30 },
      xs: { fontSize: 24 },
    },
  },
  h3: {
    props: {
      medium: true,
    },
    rStyle: {
      lg: { fontSize: 24 },
      md: { fontSize: 24 },
      xs: { fontSize: 20 },
    },
  },
  h4: {
    props: {
      medium: true,
    },
    rStyle: {
      lg: { fontSize: 20 },
      md: { fontSize: 18 },
      xs: { fontSize: 16 },
    },
  },
  h5: {
    props: {
      medium: true,
    },
    rStyle: {
      lg: { fontSize: 18 },
      md: { fontSize: 16 },
      xs: { fontSize: 14 },
    },
  },
  h6: {
    props: {
      medium: true,
    },
    rStyle: {
      lg: { fontSize: 18 },
      md: { fontSize: 16 },
      xs: { fontSize: 15 },
    },
  },
  body1: {
    rStyle: {
      lg: { fontSize: 16 },
      md: { fontSize: 14 },
      xs: { fontSize: 14 },
    },
  },
  body2: {
    rStyle: {
      lg: { fontSize: 14 },
      md: { fontSize: 12 },
      xs: { fontSize: 12 },
    },
  },
  caption: {
    props: {
      thin: true,
    },
    rStyle: {
      lg: { fontSize: 12 },
      md: { fontSize: 12 },
      xs: { fontSize: 12 },
    },
  },
  subtitle1: {
    props: {
      medium: true,
    },
    rStyle: {
      lg: { fontSize: 16 },
      md: { fontSize: 14 },
      xs: { fontSize: 14 },
    },
  },
  subtitle2: {
    props: {
      medium: true,
    },
    rStyle: {
      lg: { fontSize: 15 },
      md: { fontSize: 14 },
      xs: { fontSize: 13 },
    },
  },
};

for (let key in responsiveStyle) {
  quickComponent.addProps(key, responsiveStyle[key]);
}

interface ITextProps extends TextProps, IStyleProps, TCommonPropStyle {
  colorWhite?: boolean;
  bold?: boolean;

  // font-family
  semiBold?: boolean;
  extraBold?: boolean;
  black?: boolean;
  thin?: boolean;
  light?: boolean;
  medium?: boolean;
  center?: boolean;

  // typography
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  body1?: boolean;
  body2?: boolean;
  caption?: boolean;
  subtitle1?: boolean;
  subtitle2?: boolean;
}

const Text: React.FC<ITextProps> = quickComponent.make(RNText);

export default Text;
