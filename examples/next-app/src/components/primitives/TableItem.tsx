import React from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const TABLE_ITEM_ID = 'table-item';

export interface TableItemProps {
  cells: string[];
  header?: boolean;
  id?: string;
}

export function TableItem({ cells, header = false, id = TABLE_ITEM_ID }: TableItemProps) {
  return (
    <Row
      id={id}
      style={{
        borderBottomWidth: 1,
        borderBottomColor: COLOR.GREYSCALE_200,
        backgroundColor: header ? COLOR.GREYSCALE_50 : COLOR.WHITE,
      }}
    >
      {cells.map((cell, index) => (
        <Col
          key={index}
          flex1
          ph4
          pv3
          style={{
            borderRightWidth: index < cells.length - 1 ? 1 : 0,
            borderRightColor: COLOR.GREYSCALE_200,
          }}
        >
          <Text base style={{ fontWeight: header ? '600' : '400', color: COLOR.GREYSCALE_900 }}>
            {cell}
          </Text>
        </Col>
      ))}
    </Row>
  );
}
