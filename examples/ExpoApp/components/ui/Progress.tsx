import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface ProgressProps {
  value: number; // 0..1
  showLabel?: boolean;
  style?: ViewStyle;
}

export function Progress({ value, showLabel = false, style }: ProgressProps) {
  const pct = Math.max(0, Math.min(1, value));
  return (
    <Col gap={4} style={style}>
      {showLabel ? (
        <Row middle style={{ justifyContent: 'space-between' }}>
          <Text small secondary>Progress</Text>
          <Text small semiBold>{Math.round(pct * 100)}%</Text>
        </Row>
      ) : null}
      <Row round1 overflow="hidden" style={styles.track}>
        <Col style={[styles.fill, { width: `${pct * 100}%` }]} />
      </Row>
    </Col>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    backgroundColor: COLOR.GREYSCALE_200,
  },
  fill: {
    height: '100%',
    backgroundColor: COLOR.PRIMARY_500,
    borderRadius: 4,
  },
});
