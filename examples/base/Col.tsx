import React from 'react';
import { View, ViewProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { QuickComponent, IStyleProps } from 'quickly-react';
import { addCommonStyle, TCommonPropStyle } from './addCommonStyle';

const quickComponent = new QuickComponent();

quickComponent.setupDefaultProps([], {
  shouldDetectStyleProps: true,
});
addCommonStyle(quickComponent);

export interface ITouchableViewProps extends TouchableOpacityProps, ViewProps {
  onRef?(ref: any): void;
}

export interface IColProps extends ITouchableViewProps, IStyleProps, TCommonPropStyle {
  flex1?: boolean;
}

const TouchableView = (props: ITouchableViewProps) => {
  return !!props.onPress ? <TouchableOpacity ref={props.onRef} activeOpacity={0.9} {...props} /> : <View ref={props.onRef} {...props} />;
};

const Col: React.FC<IColProps> = quickComponent.make(TouchableView);

export default Col;
