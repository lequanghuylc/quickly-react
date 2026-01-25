import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Col } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface BurgerButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  /** Icon color */
  color?: string;
  /** Icon size */
  size?: number;
}

export function BurgerButton({
  onPress,
  style,
  color = COLOR.GREYSCALE_900,
  size = 24,
}: BurgerButtonProps) {
  return (
    <Col
      onPress={onPress}
      middle
      p3
      style={[styles.touchable, style]}
    >
      <MaterialIcons name="menu" size={size} color={color} />
    </Col>
  );
}

const styles = StyleSheet.create({
  touchable: {
    minWidth: 48,
    minHeight: 48,
  },
});
