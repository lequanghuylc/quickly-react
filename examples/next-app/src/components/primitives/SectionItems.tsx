import React from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const SECTION_ITEMS_ID = 'section-items';
export const DIVIDER_ID = 'divider';
export const MENU_ITEM_ID = 'menu-item';
export const MENU_SECTION_TITLE_ID = 'menu-section-title';

export interface DividerProps {
  id?: string;
}

export function Divider({ id = DIVIDER_ID }: DividerProps) {
  return (
    <Col
      id={id}
      style={{
        height: 1,
        backgroundColor: COLOR.GREYSCALE_200,
      }}
    />
  );
}

export interface MenuItemProps {
  label: string;
  icon?: string;
  secondaryIcon?: string;
  keyboardShortcut?: string;
  onPress?: () => void;
  id?: string;
}

export function MenuItem({
  label,
  icon,
  secondaryIcon,
  keyboardShortcut,
  onPress,
  id = MENU_ITEM_ID,
}: MenuItemProps) {
  return (
    <Row
      id={id}
      middle
      ph4
      pv3
      style={{
        backgroundColor: COLOR.WHITE,
        cursor: onPress ? 'pointer' : 'default',
      }}
      onPress={onPress}
    >
      {icon && (
        <Text base style={{ color: COLOR.GREYSCALE_500, marginRight: 8 }}>
          {icon}
        </Text>
      )}
      <Col flex1>
        <Text base medium style={{ color: COLOR.GREYSCALE_900 }}>
          {label}
        </Text>
      </Col>
      {keyboardShortcut && (
        <Text sm style={{ color: COLOR.GREYSCALE_500 }}>
          {keyboardShortcut}
        </Text>
      )}
      {secondaryIcon && (
        <Col ml2>
          <Text base style={{ color: COLOR.GREYSCALE_400 }}>
            {secondaryIcon}
          </Text>
        </Col>
      )}
    </Row>
  );
}

export interface MenuSectionTitleProps {
  title: string;
  id?: string;
}

export function MenuSectionTitle({ title, id = MENU_SECTION_TITLE_ID }: MenuSectionTitleProps) {
  return (
    <Col id={id} ph4 pv2>
      <Text sm semibold style={{ color: COLOR.GREYSCALE_500 }}>
        {title}
      </Text>
    </Col>
  );
}
