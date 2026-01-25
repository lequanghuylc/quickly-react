import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { Col, Text } from '@/components/base';

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  style?: ViewStyle;
}

export function Card({ title, subtitle, children, style }: CardProps) {
  return (
    <Col p4 round2 bgWhite shadow gap={8} style={style}>
      {title ? <Text h5 bold>{title}</Text> : null}
      {subtitle ? <Text small secondary>{subtitle}</Text> : null}
      {children}
    </Col>
  );
}
