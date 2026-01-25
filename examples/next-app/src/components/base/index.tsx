import { createBase, IStyleProps, TCommonPropStyle } from 'quickly-react';
import * as RN from 'react-native';
import {
  ViewProps,
  PressableProps,
} from 'react-native';
import { textProps, type ITextProps } from './textProps';
import { viewProps, type IViewProps } from './viewProps';

export interface IColProps
  extends ViewProps,
    PressableProps,
    IStyleProps,
    TCommonPropStyle {
  style?: any;
  children?: any;
}

export interface IRowProps extends IColProps {}

export interface IRatioColProps extends IColProps {
  ratio: number;
  width?: number | string;
}

export interface IGridProps extends IColProps {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
  xxxl?: string;
}

const BaseComponent = createBase<IColProps, IRowProps, ITextProps>({
  RN,
  addTextProps: textProps,
  addViewProps: viewProps,
  commonStyles: {},
  tokens: {
    // shadcn/ui design system tokens
    borderColor: '#E2E8F0', // BORDER
    textColorPrimary: '#0A0A0A', // FOREGROUND
    textColorSecondary: '#64748B', // MUTED_FOREGROUND
    textColorTertiary: '#FFFFFF', // PRIMARY_FOREGROUND
    bgColorPrimary: '#FFFFFF', // BACKGROUND
    bgColorSecondary: '#F1F5F9', // SECONDARY
    mainColor: '#0F172A', // PRIMARY
    unit: 4, // shadcn/ui uses 4px base unit
  },
});

export const Col: React.FC<IColProps & IViewProps> = BaseComponent.Col;
export const Row: React.FC<IRowProps & IViewProps> = BaseComponent.Row;
export const Grid: React.FC<IGridProps & IViewProps> = BaseComponent.Grid;
export const Text: React.FC<ITextProps> = BaseComponent.Text;
export const RatioCol: React.FC<IRatioColProps & IViewProps> =
  BaseComponent.RatioCol;
export * from './tokens';
