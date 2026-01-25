import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export type InfoBoxVariant = 'info' | 'success' | 'warning' | 'error';

export interface InfoBoxProps {
  variant?: InfoBoxVariant;
  title?: string;
  message: string;
  style?: ViewStyle;
}

const variantStyles: Record<InfoBoxVariant, { bg: string; border: string; fg: string }> = {
  info: { bg: COLOR.BG_BLUE, border: COLOR.INFO, fg: COLOR.GREYSCALE_900 },
  success: { bg: COLOR.BG_GREEN, border: COLOR.SUCCESS, fg: COLOR.GREYSCALE_900 },
  warning: { bg: COLOR.BG_ORANGE, border: COLOR.WARNING, fg: COLOR.GREYSCALE_900 },
  error: { bg: COLOR.BG_RED, border: COLOR.ERROR, fg: COLOR.GREYSCALE_900 },
};

export function InfoBox({
  variant = 'info',
  title,
  message,
  style,
}: InfoBoxProps) {
  const { bg, border, fg } = variantStyles[variant];
  return (
    <Col p4 round1 gap={4} style={[{ backgroundColor: bg, borderLeftWidth: 4, borderLeftColor: border }, style]}>
      {title ? <Text small semiBold style={{ color: fg }}>{title}</Text> : null}
      <Text bmedium style={{ color: fg }}>{message}</Text>
    </Col>
  );
}
