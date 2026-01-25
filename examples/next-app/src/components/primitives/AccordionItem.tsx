import React, { useState } from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const ACCORDION_ITEM_ID = 'accordion-item';

export interface AccordionItemProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
  id?: string;
}

export function AccordionItem({ 
  title, 
  content, 
  defaultOpen = false,
  id = ACCORDION_ITEM_ID 
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Col
      id={id}
      round1
      borderThin
      style={{
        borderColor: COLOR.GREYSCALE_300,
        overflow: 'hidden',
      }}
    >
      <Row
        middle
        ph4
        pv3
        onPress={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: isOpen ? COLOR.GREYSCALE_50 : COLOR.WHITE,
          cursor: 'pointer',
        }}
      >
        <Col flex1>
          <Text base medium>
            {title}
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
            borderTopWidth: 1,
            borderTopColor: COLOR.GREYSCALE_300,
            backgroundColor: COLOR.WHITE,
          }}
        >
          <Text base style={{ color: COLOR.GREYSCALE_700 }}>
            {content}
          </Text>
        </Col>
      )}
    </Col>
  );
}
