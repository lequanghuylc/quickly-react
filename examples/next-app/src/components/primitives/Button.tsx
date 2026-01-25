import React from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const BUTTON_ID = 'button';

export interface ButtonProps {
  label: string;
  variant?: 'default' | 'primary' | 'destructive' | 'outline' | 'subtle' | 'ghost' | 'link';
  icon?: string;
  iconOnly?: boolean;
  circle?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  id?: string;
}

export function Button({
  label,
  variant = 'default',
  icon,
  iconOnly = false,
  circle = false,
  loading = false,
  disabled = false,
  onPress,
  id = BUTTON_ID,
}: ButtonProps) {
  const getButtonStyle = () => {
    const baseStyle: any = {
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      opacity: disabled || loading ? 0.7 : 1,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyle,
          backgroundColor: COLOR.PRIMARY_500,
        };
      case 'destructive':
        return {
          ...baseStyle,
          backgroundColor: COLOR.DESTRUCTIVE,
        };
      case 'outline':
        return {
          ...baseStyle,
          backgroundColor: COLOR.WHITE,
          borderWidth: 1,
          borderColor: COLOR.PRIMARY_500,
        };
      case 'subtle':
        return {
          ...baseStyle,
          backgroundColor: COLOR.GREYSCALE_100,
        };
      case 'ghost':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
        };
      case 'link':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: COLOR.WHITE,
          borderWidth: 1,
          borderColor: COLOR.GREYSCALE_300,
        };
    }
  };

  const getTextColor = () => {
    if (variant === 'primary' || variant === 'destructive') {
      return COLOR.WHITE;
    }
    if (variant === 'link') {
      return COLOR.PRIMARY_500;
    }
    return COLOR.PRIMARY_500;
  };

  const borderRadius = circle ? '50%' : 6;
  const padding = iconOnly ? 2 : { horizontal: 4, vertical: 2 };

  if (variant === 'link') {
    return (
      <Col
        id={id}
        ph4
        pv2
        style={{
          backgroundColor: 'transparent',
          cursor: disabled || loading ? 'not-allowed' : 'pointer',
        }}
        onPress={onPress}
      >
        <Text
          base
          medium
          style={{
            color: getTextColor(),
            textDecorationLine: 'underline',
          }}
        >
          {label}
        </Text>
      </Col>
    );
  }

  if (iconOnly) {
    return (
      <Col
        id={id}
        p2
        middle
        style={{
          ...getButtonStyle(),
          width: 40,
          height: 40,
          borderRadius,
        }}
        onPress={onPress}
      >
        <Text base style={{ color: getTextColor() }}>
          {icon || '+'}
        </Text>
      </Col>
    );
  }

  return (
    <Row
      id={id}
      round1
      ph4
      pv2
      middle
      gap={icon ? 2 : 0}
      style={getButtonStyle()}
      onPress={onPress}
    >
      {icon && (
        <Text base style={{ color: getTextColor() }}>
          {icon}
        </Text>
      )}
      <Text base medium style={{ color: getTextColor() }}>
        {loading ? 'Loading...' : label}
      </Text>
    </Row>
  );
}
