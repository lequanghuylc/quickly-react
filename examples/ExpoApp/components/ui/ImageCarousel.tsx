import React, { useState, useRef } from 'react';
import { Dimensions, Image, ImageSourcePropType, ScrollView, StyleSheet, ViewStyle, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Col, Row } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface ImageCarouselProps {
  images: ImageSourcePropType[];
  height?: number;
  style?: ViewStyle;
}

const CARD_WIDTH = 280;
const CARD_HEIGHT = 180;
const CARD_GAP = 12;

export function ImageCarousel({
  images,
  height = CARD_HEIGHT,
  style,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const itemWidth = CARD_WIDTH + CARD_GAP;
    const newIndex = Math.round(offsetX / itemWidth);
    const clampedIndex = Math.max(0, Math.min(newIndex, images.length - 1));
    if (clampedIndex !== index) {
      setIndex(clampedIndex);
    }
  };

  const handleMomentumEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const itemWidth = CARD_WIDTH + CARD_GAP;
    const newIndex = Math.round(offsetX / itemWidth);
    const clampedIndex = Math.max(0, Math.min(newIndex, images.length - 1));
    setIndex(clampedIndex);
    
    // Snap to position
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: clampedIndex * itemWidth,
        animated: true,
      });
    }
  };

  return (
    <Col gap={12} style={style}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumEnd}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        decelerationRate="fast"
        snapToInterval={CARD_WIDTH + CARD_GAP}
        snapToAlignment="start"
      >
        {images.map((img, i) => (
          <Col
            key={i}
            round2
            overflow="hidden"
            bgSecondary
            style={[styles.card, { height }]}
          >
            <Image source={img} style={StyleSheet.absoluteFill} resizeMode="cover" />
          </Col>
        ))}
      </ScrollView>
      <Row middle gap={6} style={{ justifyContent: 'center' }}>
        {images.map((_, i) => (
          <Col
            key={i}
            round1
            style={[styles.dot, i === index && styles.dotActive]}
          />
        ))}
      </Row>
    </Col>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  card: {
    width: CARD_WIDTH,
    marginRight: CARD_GAP,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: COLOR.GREYSCALE_300,
  },
  dotActive: {
    backgroundColor: COLOR.PRIMARY_500,
    width: 10,
    height: 10,
  },
});
