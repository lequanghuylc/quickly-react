import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Col } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface DividerProps {
  vertical?: boolean;
  style?: ViewStyle;
}

export function Divider({ vertical, style }: DividerProps) {
  return (
    <Col
      style={[
        vertical ? styles.vertical : styles.horizontal,
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  horizontal: {
    height: 1,
    width: '100%',
    backgroundColor: COLOR.GREYSCALE_200,
  },
  vertical: {
    width: 1,
    height: '100%',
    backgroundColor: COLOR.GREYSCALE_200,
  },
});
