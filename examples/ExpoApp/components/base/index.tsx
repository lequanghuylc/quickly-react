import { createBase, IStyleProps, TCommonPropStyle } from 'quickly-react';
import * as RN from 'react-native';
import { ScrollViewProps } from 'react-native';
import {
  ViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
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
    borderColor: '#D1D1D6',
    textColorPrimary: '#000000',
    textColorSecondary: '#8E8E93',
    textColorTertiary: '#FFFFFF',
    bgColorPrimary: '#FFFFFF',
    bgColorSecondary: '#F2F2F7',
    mainColor: '#F22D1B',
    unit: 8,
  },
});

export const Col: React.FC<IColProps & IViewProps> = BaseComponent.Col;
export const Row: React.FC<IRowProps & IViewProps> = BaseComponent.Row;
export const Grid: React.FC<IGridProps & IViewProps> = BaseComponent.Grid;
export const Text: React.FC<ITextProps> = BaseComponent.Text;
export const RatioCol: React.FC<IRatioColProps & IViewProps> =
  BaseComponent.RatioCol;
export * from './tokens';
