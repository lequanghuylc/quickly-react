import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: string;
}

export interface SidebarProps {
  /** Array of navigation items */
  items: SidebarItem[];
  /** Currently active item ID */
  activeItemId?: string;
  /** Callback when item is pressed */
  onItemPress?: (item: SidebarItem) => void;
  /** Optional style override */
  style?: ViewStyle;
  /** Show close button (for overlay / burger menu) */
  showCloseButton?: boolean;
  /** Callback when close button is pressed */
  onClose?: () => void;
}

export function Sidebar({
  items,
  activeItemId,
  onItemPress,
  style,
  showCloseButton,
  onClose,
}: SidebarProps) {
  return (
    <Col
      bgWhite
      style={[
        { width: 240, minHeight: '100%' },
        styles.sidebar,
        style,
      ]}
    >
      <Row p4 pb2 mb2 middle style={{ justifyContent: 'space-between' }}>
        <Text h5 bold>
          Dashboard
        </Text>
        {showCloseButton && onClose ? (
          <Col onPress={onClose} middle p2 style={styles.closeBtn}>
            <MaterialIcons name="close" size={24} color={COLOR.GREYSCALE_700} />
          </Col>
        ) : null}
      </Row>
      <Col flex1>
        {items.map((item) => {
          const isActive = item.id === activeItemId;
          return (
            <Col
              key={item.id}
              onPress={() => onItemPress?.(item)}
              ph4
              pv3
              style={[
                isActive && styles.activeItem,
                !isActive && styles.inactiveItem,
              ]}
            >
              <Text
                bmedium
                style={{
                  color: isActive ? COLOR.PRIMARY_500 : COLOR.GREYSCALE_700,
                }}
              >
                {item.icon ? `${item.icon} ${item.label}` : item.label}
              </Text>
            </Col>
          );
        })}
      </Col>
    </Col>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    borderRightWidth: 1,
    borderRightColor: COLOR.GREYSCALE_200,
  },
  activeItem: {
    backgroundColor: COLOR.PRIMARY_100,
    borderLeftWidth: 3,
    borderLeftColor: COLOR.PRIMARY_500,
  },
  inactiveItem: {
    backgroundColor: 'transparent',
  },
  closeBtn: {
    minWidth: 40,
    minHeight: 40,
  },
});
