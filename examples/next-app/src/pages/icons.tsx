import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Col, Grid, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';
import { parseIconsFromFigma, IconRegistry } from '@/utils/iconRegistry';
import { Icon } from '@/components/figma/Icon';

export default function IconsPage() {
  const [iconRegistry, setIconRegistry] = useState<IconRegistry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/icons.json')
      .then((res) => res.json())
      .then((data) => {
        const registry = parseIconsFromFigma(data);
        setIconRegistry(registry);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load icons:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Col flex1 middle style={{ backgroundColor: COLOR.GREYSCALE_50 }}>
        <Text>Loading icons...</Text>
      </Col>
    );
  }

  if (!iconRegistry) {
    return (
      <Col flex1 middle style={{ backgroundColor: COLOR.GREYSCALE_50 }}>
        <Text>Failed to load icons</Text>
      </Col>
    );
  }

  const icons = Array.from(iconRegistry.getAll().values());

  return (
    <Col flex1 style={{ backgroundColor: COLOR.GREYSCALE_50 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Col p4 style={{ backgroundColor: COLOR.PRIMARY_500 }}>
          <Text lg bold style={{ color: COLOR.WHITE }}>
            Icons
          </Text>
          <Text base style={{ color: COLOR.WHITE, opacity: 0.8 }} mt1>
            {icons.length} icons available
          </Text>
        </Col>

        {/* Icons Grid */}
        <Col p4>
          <Grid xs="100%" sm="50%" md="33%" lg="25%" margin={-2}>
            {icons.map((icon) => (
              <Col
                key={icon.id}
                margin={2}
                p4
                round1
                middle
                gap={2}
                style={{
                  backgroundColor: COLOR.WHITE,
                  borderWidth: 1,
                  borderColor: COLOR.GREYSCALE_300,
                  minHeight: 120,
                }}
              >
                <Icon icon={icon} size={48} />
                <Text xs center style={{ color: COLOR.GREYSCALE_700 }}>
                  {icon.name}
                </Text>
                <Text xsmall center style={{ color: COLOR.GREYSCALE_500 }}>
                  {icon.id}
                </Text>
              </Col>
            ))}
          </Grid>
        </Col>
      </ScrollView>
    </Col>
  );
}
