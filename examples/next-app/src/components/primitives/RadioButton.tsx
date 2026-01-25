import React from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const RADIO_BUTTON_ID = 'radio-button';

export interface RadioButtonProps {
  label: string;
  checked?: boolean;
  onPress?: () => void;
  id?: string;
}

export function RadioButton({ label, checked = false, onPress, id = RADIO_BUTTON_ID }: RadioButtonProps) {
  return (
    <Row id={id} middle gap={2}>
      <Col
        middle
        style={{
          width: 18,
          height: 18,
          borderRadius: 9,
          borderWidth: 2,
          borderColor: checked ? COLOR.PRIMARY_500 : COLOR.GREYSCALE_300,
          backgroundColor: COLOR.WHITE,
          cursor: 'pointer',
        }}
        onPress={onPress}
      >
        {checked && (
          <Col
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: COLOR.PRIMARY_500,
            }}
          />
        )}
      </Col>
      <Text base style={{ color: COLOR.GREYSCALE_700 }}>
        {label}
      </Text>
    </Row>
  );
}
