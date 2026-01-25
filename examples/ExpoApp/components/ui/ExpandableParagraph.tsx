import React, { useState } from 'react';
import { ViewStyle } from 'react-native';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface ExpandableParagraphProps {
  text: string;
  maxLength: number;
  expandLabel?: string;
  collapseLabel?: string;
  style?: ViewStyle;
}

export function ExpandableParagraph({
  text,
  maxLength,
  expandLabel = 'Read more',
  collapseLabel = 'Show less',
  style,
}: ExpandableParagraphProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;
  const display = shouldTruncate && !expanded ? `${text.slice(0, maxLength).trim()}…` : text;

  return (
    <Col gap={4} style={style}>
      <Text bmedium secondary>
        {display}
      </Text>
      {shouldTruncate ? (
        <Row>
          <Col onPress={() => setExpanded((e) => !e)}>
            <Text small style={{ color: COLOR.PRIMARY_500 }}>
              {expanded ? collapseLabel : expandLabel}
            </Text>
          </Col>
        </Row>
      ) : null}
    </Col>
  );
}
