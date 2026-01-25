import { Text as RNText, TextProps, Platform } from 'react-native';
import { IStyleProps, TCommonPropStyle } from 'quickly-react';
import { useThemeContext } from 'quickly-react';
import { Col, Text, COLOR } from '@/components/base';

// const [theme] = useThemeContext();
const FONT_WEB = `"Nunito", sans-serif`;
export const FONT = {
  Font_200ExtraLight: Platform.OS === 'web' ? FONT_WEB : 'Nunito_200ExtraLight',
  Font_300Light: Platform.OS === 'web' ? FONT_WEB : 'Nunito_300Light',
  Font_400Regular: Platform.OS === 'web' ? FONT_WEB : 'Nunito_400Regular',
  Font_500Medium: Platform.OS === 'web' ? FONT_WEB : 'Nunito_500Medium',
  Font_600SemiBold: Platform.OS === 'web' ? FONT_WEB : 'Nunito_600SemiBold',
  Font_700Bold: Platform.OS === 'web' ? FONT_WEB : 'Nunito_700Bold',
  Font_800ExtraBold: Platform.OS === 'web' ? FONT_WEB : 'Nunito_800ExtraBold',
  Font_900Black: Platform.OS === 'web' ? FONT_WEB : 'Nunito_900Black',
};

type TPropParam = {
  propName: string;
  obj: any;
  isDefault?: boolean;
};

export const textProps: Array<TPropParam> = [
  {
    propName: 'bold',
    obj: {
      style: {
        fontWeight: 'bold',
        fontFamily: FONT.Font_700Bold,
      },
    },
  },
  {
    propName: 'semiBold',
    obj: {
      style: {
        fontWeight: '600',
        fontFamily: FONT.Font_600SemiBold,
      },
    },
  },
  {
    propName: 'light',
    obj: {
      style: {
        fontWeight: '300',
        fontFamily: FONT.Font_300Light,
      },
    },
  },
  {
    propName: 'medium',
    obj: {
      style: {
        fontWeight: '500',
        fontFamily: FONT.Font_500Medium,
      },
    },
  },
  {
    propName: 'black',
    obj: {
      style: {
        fontWeight: '900',
        fontFamily: FONT.Font_900Black,
      },
    },
  },
  {
    propName: 'center',
    obj: {
      style: {
        textAlign: 'center',
      },
    },
  },
  {
    propName: 'regular',
    obj: {
      style: {
        fontWeight: '400',
        fontFamily: FONT.Font_400Regular,
      },
    },
    isDefault: true,
  },
  {
    propName: 'colorDefault',
    obj: {
      theme: {
        dark: {
          color: 'white',
        },
        light: {
          color: 'black',
        },
      },
    },
    isDefault: true,
  },
  {
    propName: 'h1',
    obj: {
      style: { fontSize: 48, lineHeight: 48 * 1.4 },
    },
  },
  {
    propName: 'h2',
    obj: {
      style: { fontSize: 40, lineHeight: 40 * 1.4 },
    },
  },
  {
    propName: 'h3',
    obj: {
      style: { fontSize: 32, lineHeight: 32 * 1.4 },
    },
  },
  {
    propName: 'h4',
    obj: {
      style: { fontSize: 24, lineHeight: 24 * 1.4 },
    },
  },
  {
    propName: 'h5',
    obj: {
      style: { fontSize: 20, lineHeight: 20 * 1.4 },
    },
  },
  {
    propName: 'h6',
    obj: {
      style: { fontSize: 18, lineHeight: 18 * 1.4 },
    },
  },
  {
    propName: 'xlarge',
    obj: {
      style: { fontSize: 18, lineHeight: 18 * 1.4 },
    },
  },
  {
    propName: 'large',
    obj: {
      style: { fontSize: 16, lineHeight: 16 * 1.4 },
    },
  },
  {
    propName: 'bmedium',
    obj: {
      style: { fontSize: 14, lineHeight: 14 * 1.4 },
    },
    isDefault: true,
  },
  {
    propName: 'small',
    obj: {
      style: { fontSize: 12, lineHeight: 12 * 1.4 },
    },
  },
  {
    propName: 'xsmall',
    obj: {
      style: { fontSize: 10, lineHeight: 10 * 1.4 },
    },
  },
];

export interface ITextProps extends TextProps, IStyleProps, TCommonPropStyle {
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
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  xlarge?: boolean;
  large?: boolean;
  bmedium?: boolean;
  small?: boolean;
  xsmall?: boolean;

  primary?: boolean;
  brand?: boolean;
  secondary?: boolean;
}
