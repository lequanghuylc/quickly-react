import React from 'react';
import { Col, Grid, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const PALETTE_ID = 'palette';

export interface PaletteProps {
  colors: Array<{ name: string; value: string }>;
  id?: string;
}

export function Palette({ colors, id = PALETTE_ID }: PaletteProps) {
  return (
    <Col id={id} gap={2}>
      <Grid xs="100%" sm="50%" md="33%" lg="25%" margin={-2}>
        {colors.map((color, index) => (
          <Col key={index} margin={2} gap={1}>
            <Col
              style={{
                width: '100%',
                height: 80,
                backgroundColor: color.value,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: COLOR.GREYSCALE_300,
              }}
            />
            <Text xs medium>
              {color.name}
            </Text>
            <Text xs style={{ color: COLOR.GREYSCALE_500 }}>
              {color.value}
            </Text>
          </Col>
        ))}
      </Grid>
    </Col>
  );
}
