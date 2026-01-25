import React from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const CHECKBOX_ID = 'checkbox';

export interface CheckboxProps {
  label: string;
  description?: string;
  checked?: boolean;
  onToggle?: (checked: boolean) => void;
  id?: string;
}

export function Checkbox({
  label,
  description,
  checked = false,
  onToggle,
  id = CHECKBOX_ID,
}: CheckboxProps) {
  return (
    <Col id={id} gap={description ? 1 : 0}>
      <Row middle gap={2}>
        <Col
          round0
          style={{
            width: 14,
            height: 14,
            borderWidth: 1,
            borderColor: COLOR.GREYSCALE_300,
            backgroundColor: COLOR.WHITE,
            cursor: 'pointer',
          }}
          onPress={() => onToggle?.(!checked)}
        >
          {checked && (
            <Col flex1 middle>
              <Text xs style={{ color: COLOR.PRIMARY_500 }}>
                ✓
              </Text>
            </Col>
          )}
        </Col>
        <Text base style={{ color: COLOR.GREYSCALE_700 }}>
          {label}
        </Text>
      </Row>
      {description && (
        <Text sm style={{ color: COLOR.GREYSCALE_500 }} ml4>
          {description}
        </Text>
      )}
    </Col>
  );
}
