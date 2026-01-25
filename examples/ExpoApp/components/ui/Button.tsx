import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps {
  /** Button label */
  title: string;
  /** Press handler */
  onPress: () => void;
  /** Visual variant */
  variant?: ButtonVariant;
  /** Disabled state */
  disabled?: boolean;
  /** Optional style override */
  style?: ViewStyle;
}

const variantStyles: Record<ButtonVariant, { bg: string; fg: string; border?: string }> = {
  primary: {
    bg: COLOR.PRIMARY_500,
    fg: COLOR.WHITE,
  },
  secondary: {
    bg: COLOR.GREYSCALE_200,
    fg: COLOR.GREYSCALE_900,
  },
  outline: {
    bg: 'transparent',
    fg: COLOR.PRIMARY_500,
    border: COLOR.PRIMARY_500,
  },
};

export function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
}: ButtonProps) {
  const { bg, fg, border } = variantStyles[variant];

  return (
    <Col
      onPress={disabled ? undefined : onPress}
      middle
      round1
      ph1
      pv2
      style={[
        { backgroundColor: bg },
        border && { borderWidth: 2, borderColor: border },
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text bmedium style={{ color: fg }}>
        {title}
      </Text>
    </Col>
  );
}

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
});
