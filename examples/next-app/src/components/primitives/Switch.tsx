import React from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const SWITCH_ID = 'switch';

export interface SwitchProps {
  label?: string;
  checked?: boolean;
  onToggle?: (checked: boolean) => void;
  id?: string;
}

export function Switch({ label, checked = false, onToggle, id = SWITCH_ID }: SwitchProps) {
  return (
    <Row id={id} middle gap={2}>
      <Col
        style={{
          width: 44,
          height: 24,
          borderRadius: 12,
          backgroundColor: checked ? COLOR.PRIMARY_500 : COLOR.GREYSCALE_300,
          padding: 2,
          cursor: 'pointer',
        }}
        onPress={() => onToggle?.(!checked)}
      >
        <Col
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: COLOR.WHITE,
            marginLeft: checked ? 20 : 0,
            transition: 'margin-left 0.2s',
          }}
        />
      </Col>
      {label && (
        <Text base style={{ color: COLOR.GREYSCALE_700 }}>
          {label}
        </Text>
      )}
    </Row>
  );
}
