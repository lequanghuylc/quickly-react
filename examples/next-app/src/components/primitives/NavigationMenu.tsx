import React, { useState } from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const NAVIGATION_MENU_ID = 'navigation-menu';
export const NAVIGATION_MENU_ITEM_ID = 'navigation-menu-item';
export const NAVIGATION_MENU_CONTENT_ITEM_ID = 'navigation-menu-content-item';
export const NAVIGATION_MENU_CONTENT_ID = 'navigation-menu-content';

export interface NavigationMenuItemProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
  id?: string;
}

export function NavigationMenuItem({
  label,
  active = false,
  onPress,
  id = NAVIGATION_MENU_ITEM_ID,
}: NavigationMenuItemProps) {
  return (
    <Col
      id={id}
      ph4
      pv2
      style={{
        backgroundColor: active ? COLOR.GREYSCALE_50 : 'transparent',
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

export interface NavigationMenuContentItemProps {
  title: string;
  description?: string;
  onPress?: () => void;
  id?: string;
}

export function NavigationMenuContentItem({
  title,
  description,
  onPress,
  id = NAVIGATION_MENU_CONTENT_ITEM_ID,
}: NavigationMenuContentItemProps) {
  return (
    <Col
      id={id}
      p3
      round1
      style={{
        backgroundColor: COLOR.WHITE,
        borderWidth: 1,
        borderColor: COLOR.GREYSCALE_300,
        cursor: onPress ? 'pointer' : 'default',
      }}
      onPress={onPress}
    >
      <Text base bold mb1>
        {title}
      </Text>
      {description && (
        <Text sm style={{ color: COLOR.GREYSCALE_600 }}>
          {description}
        </Text>
      )}
    </Col>
  );
}

export interface NavigationMenuContentProps {
  items: Array<{ title: string; description?: string }>;
  id?: string;
}

export function NavigationMenuContent({ items, id = NAVIGATION_MENU_CONTENT_ID }: NavigationMenuContentProps) {
  return (
    <Col id={id} gap={2}>
      {items.map((item, index) => (
        <NavigationMenuContentItem key={index} {...item} />
      ))}
    </Col>
  );
}

export interface NavigationMenuProps {
  items: string[];
  content?: Array<{ title: string; description?: string }>;
  defaultActive?: number;
  id?: string;
}

export function NavigationMenu({
  items,
  content,
  defaultActive = 0,
  id = NAVIGATION_MENU_ID,
}: NavigationMenuProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <Col id={id} gap={3}>
      <Row gap={1}>
        {items.map((item, index) => (
          <NavigationMenuItem
            key={index}
            label={item}
            active={index === activeIndex}
            onPress={() => setActiveIndex(index)}
          />
        ))}
      </Row>
      {content && <NavigationMenuContent items={content} />}
    </Col>
  );
}
