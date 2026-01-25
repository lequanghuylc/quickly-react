import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface SwitchProps {
  label: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
  style?: ViewStyle;
}

export function Switch({ label, value, onValueChange, style }: SwitchProps) {
  return (
    <Row middle gap={12} onPress={() => onValueChange(!value)} style={style}>
      <Col
        round2
        middle
        style={[
          styles.track,
          value && styles.trackOn,
        ]}
      >
        <Row
          style={[
            styles.thumbRow,
            value && styles.thumbRowOn,
          ]}
        >
          <Col round2 style={styles.thumb} />
        </Row>
      </Col>
      <Text bmedium>{label}</Text>
    </Row>
  );
}

const TRACK_W = 48;
const TRACK_H = 28;
const THUMB_SIZE = 22;
const PADDING = (TRACK_H - THUMB_SIZE) / 2;

const styles = StyleSheet.create({
  track: {
    width: TRACK_W,
    height: TRACK_H,
    backgroundColor: COLOR.GREYSCALE_300,
    paddingHorizontal: PADDING,
  },
  trackOn: {
    backgroundColor: COLOR.PRIMARY_500,
  },
  thumbRow: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    alignSelf: 'flex-start',
  },
  thumbRowOn: {
    alignSelf: 'flex-end',
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    backgroundColor: COLOR.WHITE,
  },
});
