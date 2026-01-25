import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface SliderProps {
  value: number;
  onValueChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  showValue?: boolean;
  style?: ViewStyle;
}

export function Slider({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  showValue = true,
  style,
}: SliderProps) {
  const pct = Math.max(0, Math.min(1, (value - min) / (max - min || 1)));
  const stepCount = Math.max(1, Math.round((max - min) / step));
  const stepIndex = Math.round(((value - min) / (max - min || 1)) * stepCount);

  const setFromIndex = (i: number) => {
    const v = min + (i / stepCount) * (max - min);
    onValueChange(Math.round(v / step) * step);
  };

  return (
    <Col gap={8} style={style}>
      <Row middle style={{ justifyContent: 'space-between' }}>
        <Text small secondary>{min}</Text>
        {showValue ? <Text bmedium>{value}</Text> : null}
        <Text small secondary>{max}</Text>
      </Row>
      <Row middle gap={4} style={styles.trackWrap}>
        {Array.from({ length: stepCount + 1 }, (_, i) => (
          <Col
            key={i}
            onPress={() => setFromIndex(i)}
            style={[styles.segment, i <= stepIndex && styles.segmentFilled]}
          />
        ))}
      </Row>
    </Col>
  );
}

const styles = StyleSheet.create({
  trackWrap: {
    height: 24,
  },
  segment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLOR.GREYSCALE_300,
  },
  segmentFilled: {
    backgroundColor: COLOR.PRIMARY_500,
  },
});
