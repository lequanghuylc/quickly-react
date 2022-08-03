
import {
  TextStyle, ViewStyle,ImageStyle,
} from 'react-native';

export { IProps as IStyleProps } from './hooks/usePropsStyle';
export type TOneStyle = TextStyle & ViewStyle & ImageStyle & any;
export type TStyle = TextStyle & ViewStyle & ImageStyle
export type TReactComponent = any

export interface IAddProps {
  theme?: {
    [nameOfTheme: string] : {
      [colorStyle: string]: string,
    },
  },
  computedStyle?: TStyle,
  style?: TStyle,
  rStyle?: {
    [breakpoint: string]: TStyle,
  },
  props?: any,
}

// for react-native array style
export interface IAddPropsArray {
  theme?: {
    [nameOfTheme: string] : {
      [colorStyle: string]: string,
    },
  },
  computedStyle?: TStyle,
  style?: TStyle | Array<TStyle>,
  rStyle?: {
    [breakpoint: string]: TStyle,
  },
  props?: any,
}

export interface IStoreProps {
  [name: string]: IPropSetup,
}

export interface IPropSetup extends IAddProps {
  name: string,
};

export type TBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
