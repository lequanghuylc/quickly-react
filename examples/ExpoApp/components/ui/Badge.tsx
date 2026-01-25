import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
}

const variantStyles: Record<BadgeVariant, { bg: string; fg: string }> = {
  default: { bg: COLOR.GREYSCALE_200, fg: COLOR.GREYSCALE_800 },
  primary: { bg: COLOR.PRIMARY_100, fg: COLOR.PRIMARY_500 },
  success: { bg: COLOR.BG_GREEN, fg: COLOR.SUCCESS },
  warning: { bg: COLOR.BG_ORANGE, fg: COLOR.WARNING },
  error: { bg: COLOR.BG_RED, fg: COLOR.ERROR },
};

export function Badge({ label, variant = 'default', style }: BadgeProps) {
  const { bg, fg } = variantStyles[variant];
  return (
    <Col ph2 pv1 round1 middle style={[{ backgroundColor: bg }, style]}>
      <Text xsmall semiBold style={{ color: fg }}>
        {label}
      </Text>
    </Col>
  );
}
