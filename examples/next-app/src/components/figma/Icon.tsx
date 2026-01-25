import React from 'react';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';
import { IconData } from '@/utils/iconRegistry';

export interface IconProps {
  icon: IconData;
  size?: number;
  color?: string;
  id?: string;
}

// SVG component for React Native Web
const SvgIcon = ({ path, size, color, viewBox }: { path: string; size: number; color: string; viewBox: string }) => {
  // For web, use native SVG
  if (typeof window !== 'undefined') {
    return (
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={path}
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  // Fallback for native
  return null;
};

export function Icon({ icon, size, color, id }: IconProps) {
  const iconSize = size || icon.width || 24;
  const iconColor = color || icon.color || COLOR.GREYSCALE_900;
  const viewBox = `0 0 ${icon.width || 24} ${icon.height || 24}`;

  // If we have an SVG path, render it
  if (icon.svgPath) {
    return (
      <Col
        id={id}
        style={{
          width: iconSize,
          height: iconSize,
        }}
      >
        <SvgIcon path={icon.svgPath} size={iconSize} color={iconColor} viewBox={viewBox} />
      </Col>
    );
  }

  // Fallback: render icon name as text or emoji
  const iconName = icon.name.toLowerCase();
  const emojiMap: Record<string, string> = {
    mail: '✉',
    plus: '+',
    check: '✓',
    arrow: '→',
    accessibility: '♿',
  };
  
  const emoji = Object.keys(emojiMap).find(key => iconName.includes(key));
  const displayChar = emoji ? emojiMap[emoji] : icon.name.charAt(0).toUpperCase();

  return (
    <Col
      id={id}
      middle
      style={{
        width: iconSize,
        height: iconSize,
        backgroundColor: COLOR.GREYSCALE_100,
        borderRadius: 4,
      }}
    >
      <Text base style={{ color: iconColor, fontSize: iconSize * 0.6 }}>
        {displayChar}
      </Text>
    </Col>
  );
}
