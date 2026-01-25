import React from 'react';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const INLINE_CODE_ID = 'inline-code';

export interface InlineCodeProps {
  code: string;
  id?: string;
}

export function InlineCode({ code, id = INLINE_CODE_ID }: InlineCodeProps) {
  return (
    <Col
      id={id}
      ph2
      pv1
      style={{
        backgroundColor: COLOR.GREYSCALE_100,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLOR.GREYSCALE_300,
      }}
    >
      <Text xs style={{ fontFamily: 'monospace', color: COLOR.PRIMARY_500 }}>
        {code}
      </Text>
    </Col>
  );
}
