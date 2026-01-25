import React, { useState } from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const TABS_ID = 'tabs';
export const TAB_ITEM_ID = 'tab-item';
export const TAB_CARD_ID = 'tab-card';

export interface TabItemProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
  id?: string;
}

export function TabItem({ label, active = false, onPress, id = TAB_ITEM_ID }: TabItemProps) {
  return (
    <Col
      id={id}
      ph4
      pv2
      style={{
        borderBottomWidth: active ? 2 : 0,
        borderBottomColor: active ? COLOR.PRIMARY_500 : 'transparent',
        cursor: 'pointer',
      }}
      onPress={onPress}
    >
      <Text base medium style={{ color: active ? COLOR.PRIMARY_500 : COLOR.GREYSCALE_600 }}>
        {label}
      </Text>
    </Col>
  );
}

export interface TabsProps {
  items: string[];
  defaultActive?: number;
  id?: string;
}

export function Tabs({ items, defaultActive = 0, id = TABS_ID }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <Row id={id} style={{ borderBottomWidth: 1, borderBottomColor: COLOR.GREYSCALE_200 }}>
      {items.map((item, index) => (
        <TabItem
          key={index}
          label={item}
          active={index === activeIndex}
          onPress={() => setActiveIndex(index)}
        />
      ))}
    </Row>
  );
}

export interface TabCardProps {
  title: string;
  content: string;
  id?: string;
}

export function TabCard({ title, content, id = TAB_CARD_ID }: TabCardProps) {
  return (
    <Col
      id={id}
      p4
      round1
      style={{
        backgroundColor: COLOR.WHITE,
        borderWidth: 1,
        borderColor: COLOR.GREYSCALE_300,
      }}
    >
      <Text base bold mb2>
        {title}
      </Text>
      <Text base style={{ color: COLOR.GREYSCALE_700 }}>
        {content}
      </Text>
    </Col>
  );
}
