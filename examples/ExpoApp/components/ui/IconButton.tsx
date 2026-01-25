import React from 'react';
import type { ComponentProps } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Col } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export type IconButtonIcon = 'favorite' | 'share' | 'settings' | 'search' | 'add' | 'close' | 'edit' | 'delete';

export interface IconButtonProps {
  icon: IconButtonIcon;
  onPress: () => void;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const iconMap: Record<IconButtonIcon, ComponentProps<typeof MaterialIcons>['name']> = {
  favorite: 'favorite',
  share: 'share',
  settings: 'settings',
  search: 'search',
  add: 'add',
  close: 'close',
  edit: 'edit',
  delete: 'delete',
};

export function IconButton({
  icon,
  onPress,
  size = 24,
  color = COLOR.GREYSCALE_700,
  style,
}: IconButtonProps) {
  return (
    <Col onPress={onPress} middle round1 style={[styles.touchable, style]}>
      <MaterialIcons name={iconMap[icon]} size={size} color={color} />
    </Col>
  );
}

const styles = StyleSheet.create({
  touchable: {
    width: 44,
    height: 44,
    backgroundColor: COLOR.GREYSCALE_200,
  },
});
