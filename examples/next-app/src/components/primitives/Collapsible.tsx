import React, { useState } from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const COLLAPSIBLE_ID = 'collapsible';

export interface CollapsibleProps {
  trigger: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
}

export function Collapsible({
  trigger,
  children,
  defaultOpen = false,
  id = COLLAPSIBLE_ID,
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Col id={id}>
      <Row
        middle
        ph4
        pv3
        onPress={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: COLOR.WHITE,
          borderWidth: 1,
          borderColor: COLOR.GREYSCALE_300,
          borderRadius: 6,
          cursor: 'pointer',
        }}
      >
        <Col flex1>
          <Text base medium>
            {trigger}
          </Text>
        </Col>
        <Col
          style={{
            transform: [{ rotate: isOpen ? '180deg' : '0deg' }],
            transition: 'transform 0.2s',
          }}
        >
          <Text base>▼</Text>
        </Col>
      </Row>
      {isOpen && (
        <Col
          ph4
          pv3
          style={{
            borderWidth: 1,
            borderTopWidth: 0,
            borderColor: COLOR.GREYSCALE_300,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            backgroundColor: COLOR.WHITE,
          }}
        >
          {children}
        </Col>
      )}
    </Col>
  );
}
