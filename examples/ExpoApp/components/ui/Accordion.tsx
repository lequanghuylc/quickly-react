import React, { useState } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  style?: ViewStyle;
}

export function Accordion({
  items,
  allowMultiple = false,
  style,
}: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <Col gap={0} style={style}>
      {items.map((item) => {
        const isOpen = open.has(item.id);
        return (
          <Col key={item.id} round1 borderThin bgWhite overflow="hidden" mb1>
            <Row
              onPress={() => toggle(item.id)}
              middle
              ph4
              pv3
              style={{ justifyContent: 'space-between' }}
            >
              <Text bmedium>{item.title}</Text>
              <MaterialIcons
                name={isOpen ? 'expand-less' : 'expand-more'}
                size={24}
                color={COLOR.GREYSCALE_600}
              />
            </Row>
            {isOpen ? (
              <Col ph4 pv3 style={{ borderTopWidth: 1, borderTopColor: COLOR.GREYSCALE_300 }}>
                <Text bmedium secondary>
                  {item.content}
                </Text>
              </Col>
            ) : null}
          </Col>
        );
      })}
    </Col>
  );
}
