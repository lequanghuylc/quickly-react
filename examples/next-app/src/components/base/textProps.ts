import { TextProps } from 'react-native';
import { IStyleProps, TCommonPropStyle } from 'quickly-react';
import { TYPOGRAPHY } from './tokens';

type TPropParam = {
  propName: string;
  obj: any;
  isDefault?: boolean;
};

export const textProps: Array<TPropParam> = [
  {
    propName: 'regular',
    obj: {
      style: {
        fontWeight: TYPOGRAPHY.fontWeight.regular,
        fontSize: TYPOGRAPHY.fontSize.base,
        lineHeight: TYPOGRAPHY.fontSize.base * TYPOGRAPHY.lineHeight.normal,
      },
    },
    isDefault: true,
  },
  {
    propName: 'medium',
    obj: {
      style: {
        fontWeight: TYPOGRAPHY.fontWeight.medium,
        fontSize: TYPOGRAPHY.fontSize.base,
        lineHeight: TYPOGRAPHY.fontSize.base * TYPOGRAPHY.lineHeight.normal,
      },
    },
  },
  {
    propName: 'semibold',
    obj: {
      style: {
        fontWeight: TYPOGRAPHY.fontWeight.semibold,
      },
    },
  },
  {
    propName: 'bold',
    obj: {
      style: {
        fontWeight: TYPOGRAPHY.fontWeight.bold,
      },
    },
  },
  {
    propName: 'xs',
    obj: {
      style: {
        fontSize: TYPOGRAPHY.fontSize.xs,
        lineHeight: TYPOGRAPHY.fontSize.xs * TYPOGRAPHY.lineHeight.normal,
      },
    },
  },
  {
    propName: 'sm',
    obj: {
      style: {
        fontSize: TYPOGRAPHY.fontSize.sm,
        lineHeight: TYPOGRAPHY.fontSize.sm * TYPOGRAPHY.lineHeight.normal,
      },
    },
  },
  {
    propName: 'base',
    obj: {
      style: {
        fontSize: TYPOGRAPHY.fontSize.base,
        lineHeight: TYPOGRAPHY.fontSize.base * TYPOGRAPHY.lineHeight.normal,
      },
    },
  },
  {
    propName: 'md',
    obj: {
      style: {
        fontSize: TYPOGRAPHY.fontSize.md,
        lineHeight: TYPOGRAPHY.fontSize.md * TYPOGRAPHY.lineHeight.normal,
      },
    },
  },
  {
    propName: 'lg',
    obj: {
      style: {
        fontSize: TYPOGRAPHY.fontSize.lg,
        lineHeight: TYPOGRAPHY.fontSize.lg * TYPOGRAPHY.lineHeight.normal,
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
];

export interface ITextProps extends TextProps, IStyleProps, TCommonPropStyle {
  regular?: boolean;
  medium?: boolean;
  semibold?: boolean;
  bold?: boolean;
  xs?: boolean;
  sm?: boolean;
  base?: boolean;
  md?: boolean;
  lg?: boolean;
  center?: boolean;
}
