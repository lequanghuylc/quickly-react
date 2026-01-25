import React from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const MENUBAR_ID = 'menubar';
export const MENUBAR_ITEM_ID = 'menubar-item';

export interface MenubarItemProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
  id?: string;
}

export function MenubarItem({ label, active = false, onPress, id = MENUBAR_ITEM_ID }: MenubarItemProps) {
  return (
    <Col
      id={id}
      ph3
      pv2
      style={{
        backgroundColor: active ? COLOR.GREYSCALE_100 : 'transparent',
        borderRadius: 4,
        cursor: 'pointer',
      }}
      onPress={onPress}
    >
      <Text base medium style={{ color: active ? COLOR.PRIMARY_500 : COLOR.GREYSCALE_700 }}>
        {label}
      </Text>
    </Col>
  );
}

export interface MenubarProps {
  items: string[];
  defaultActive?: number;
  id?: string;
}

export function Menubar({ items, defaultActive = 0, id = MENUBAR_ID }: MenubarProps) {
  const [activeIndex, setActiveIndex] = React.useState(defaultActive);

  return (
    <Row id={id} gap={1}>
      {items.map((item, index) => (
        <MenubarItem
          key={index}
          label={item}
          active={index === activeIndex}
          onPress={() => setActiveIndex(index)}
        />
      ))}
    </Row>
  );
}
