import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
  style?: ViewStyle;
}

export function Checkbox({ label, checked, onToggle, style }: CheckboxProps) {
  return (
    <Row middle gap={8} onPress={onToggle} style={style}>
      <Col
        middle
        round0
        style={[
          styles.box,
          checked && styles.boxChecked,
        ]}
      >
        {checked ? (
          <MaterialIcons name="check" size={16} color={COLOR.WHITE} />
        ) : null}
      </Col>
      <Text bmedium>{label}</Text>
    </Row>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: COLOR.GREYSCALE_400,
  },
  boxChecked: {
    backgroundColor: COLOR.PRIMARY_500,
    borderColor: COLOR.PRIMARY_500,
  },
});
