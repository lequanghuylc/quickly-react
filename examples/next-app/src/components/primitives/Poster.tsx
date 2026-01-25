import React from 'react';
// @ts-ignore - react-native-linear-gradient types
import LinearGradient from 'react-native-linear-gradient';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const POSTER_ID = 'poster';

export interface PosterProps {
  title: string;
  description?: string;
  imageUrl?: string;
  gradientColors?: string[];
  id?: string;
}

export function Poster({
  title,
  description,
  imageUrl,
  gradientColors = [COLOR.PRIMARY_500, COLOR.PRIMARY_400, COLOR.PRIMARY_300],
  id = POSTER_ID,
}: PosterProps) {
  return (
    <Col
      id={id}
      round1
      style={{
        backgroundColor: COLOR.GREYSCALE_100,
        borderWidth: 1,
        borderColor: COLOR.GREYSCALE_300,
        overflow: 'hidden',
      }}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: '100%',
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {imageUrl ? (
          <Col flex1 middle>
            {/* Image would go here if imageUrl is provided */}
            <Text base bold style={{ color: COLOR.WHITE }}>
              {title}
            </Text>
          </Col>
        ) : (
          <Col flex1 middle>
            <Text base bold style={{ color: COLOR.WHITE, opacity: 0.9 }}>
              {title}
            </Text>
            {description && (
              <Text sm style={{ color: COLOR.WHITE, opacity: 0.8 }} mt1>
                {description}
              </Text>
            )}
          </Col>
        )}
      </LinearGradient>
      {imageUrl && (
        <Col p4>
          <Text base bold mb1>
            {title}
          </Text>
          {description && (
            <Text sm style={{ color: COLOR.GREYSCALE_600 }}>
              {description}
            </Text>
          )}
        </Col>
      )}
    </Col>
  );
}
