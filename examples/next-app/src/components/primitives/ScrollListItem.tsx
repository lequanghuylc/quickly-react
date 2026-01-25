import React from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const SCROLL_LIST_ITEM_ID = 'scroll-list-item';

export interface ScrollListItemProps {
  title: string;
  subtitle?: string;
  icon?: string;
  onPress?: () => void;
  id?: string;
}

export function ScrollListItem({
  title,
  subtitle,
  icon,
  onPress,
  id = SCROLL_LIST_ITEM_ID,
}: ScrollListItemProps) {
  return (
    <Row
      id={id}
      middle
      ph4
      pv3
      gap={2}
      style={{
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.GREYSCALE_200,
        cursor: onPress ? 'pointer' : 'default',
      }}
      onPress={onPress}
    >
      {icon && (
        <Col
          middle
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: COLOR.GREYSCALE_100,
          }}
        >
          <Text base>{icon}</Text>
        </Col>
      )}
      <Col flex1>
        <Text base medium style={{ color: COLOR.GREYSCALE_900 }}>
          {title}
        </Text>
        {subtitle && (
          <Text sm style={{ color: COLOR.GREYSCALE_500 }} mt1>
            {subtitle}
          </Text>
        )}
      </Col>
    </Row>
  );
}
