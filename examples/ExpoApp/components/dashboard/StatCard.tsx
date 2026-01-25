import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface StatCardProps {
  /** Stat title/label */
  title: string;
  /** Stat value (can be number or string) */
  value: string | number;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Optional icon or indicator color */
  accentColor?: string;
  /** Optional style override */
  style?: ViewStyle;
  /** Optional onPress handler to make card interactive */
  onPress?: () => void;
}

export function StatCard({
  title,
  value,
  subtitle,
  accentColor,
  style,
  onPress,
}: StatCardProps) {
  return (
    <Col
      onPress={onPress}
      p4
      round2
      bgWhite
      shadow
      style={[
        accentColor && { borderLeftWidth: 4, borderLeftColor: accentColor },
        style,
      ]}
    >
      <Text small secondary mb1>
        {title}
      </Text>
      <Text h3 bold mb1>
        {value}
      </Text>
      {subtitle ? (
        <Text xsmall secondary>
          {subtitle}
        </Text>
      ) : null}
    </Col>
  );
}
