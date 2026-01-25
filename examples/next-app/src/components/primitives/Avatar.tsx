import React from 'react';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const AVATAR_ID = 'avatar';

export interface AvatarProps {
  name?: string;
  src?: string;
  size?: number;
  id?: string;
}

export function Avatar({ name, src, size = 40, id = AVATAR_ID }: AvatarProps) {
  const initials = name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Col
      id={id}
      middle
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: COLOR.PRIMARY_500,
        overflow: 'hidden',
      }}
    >
      {src ? (
        <Col flex1 style={{ width: '100%', height: '100%' }}>
          {/* Image would go here in a real implementation */}
          <Text base style={{ color: COLOR.WHITE }}>
            {initials}
          </Text>
        </Col>
      ) : (
        <Text base bold style={{ color: COLOR.WHITE }}>
          {initials || 'U'}
        </Text>
      )}
    </Col>
  );
}
