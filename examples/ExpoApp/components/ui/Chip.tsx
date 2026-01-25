import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface ChipProps {
  label: string;
  selected?: boolean;
  onPress: () => void;
  style?: ViewStyle;
}

export function Chip({ label, selected, onPress, style }: ChipProps) {
  return (
    <Col
      onPress={onPress}
      ph3
      pv2
      round2
      middle
      borderThin
      style={[
        { borderColor: selected ? COLOR.PRIMARY_500 : COLOR.GREYSCALE_300 },
        selected && { backgroundColor: COLOR.PRIMARY_100 },
        style,
      ]}
    >
      <Text bmedium style={{ color: selected ? COLOR.PRIMARY_500 : COLOR.GREYSCALE_700 }}>
        {label}
      </Text>
    </Col>
  );
}
