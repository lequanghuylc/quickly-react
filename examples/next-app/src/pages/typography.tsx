import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Col } from '@/components/base';
import { COLOR } from '@/components/base/tokens';
import { FigmaPage } from '@/components/figma/FigmaRenderer';
import { FigmaNode } from '@/utils/figmaParser';
import { parseIconsFromFigma, IconRegistry } from '@/utils/iconRegistry';

export default function TypographyPage() {
  const [data, setData] = useState<FigmaNode[]>([]);
  const [iconRegistry, setIconRegistry] = useState<IconRegistry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load icons first
    Promise.all([
      fetch('/icons.json').then((res) => res.json()),
      fetch('/typography.json').then((res) => res.json()),
    ])
      .then(([iconsData, typographyData]) => {
        const registry = parseIconsFromFigma(iconsData);
        setIconRegistry(registry);
        setData(typographyData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Col flex1 middle style={{ backgroundColor: COLOR.GREYSCALE_50 }}>
        <Col>Loading...</Col>
      </Col>
    );
  }

  return (
    <Col flex1 style={{ backgroundColor: COLOR.GREYSCALE_50 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <FigmaPage data={data} title="Typography" iconRegistry={iconRegistry || undefined} />
      </ScrollView>
    </Col>
  );
}
