import React, { ReactNode, useState, useCallback } from 'react';
import { Modal, Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Col, Row, Text } from '@/components/base';
import { useWindowWidthBreakpoint } from 'quickly-react';
import { BurgerButton } from '@/components/ui/BurgerButton';
import { Sidebar, SidebarItem } from './Sidebar';

const MOBILE_BREAKPOINTS = ['xs', 'sm'] as const;
const DESKTOP_BREAKPOINTS = ['md', 'lg', 'xl', 'xxl', 'xxxl'] as const;

export interface DashboardLayoutProps {
  /** Sidebar navigation items */
  sidebarItems: SidebarItem[];
  /** Currently active sidebar item */
  activeSidebarItem?: string;
  /** Callback when sidebar item is pressed */
  onSidebarItemPress?: (item: SidebarItem) => void;
  /** Main content area */
  children: ReactNode;
  /** Optional style override for container */
  style?: ViewStyle;
  /** Optional style override for content area */
  contentStyle?: ViewStyle;
}

export function DashboardLayout({
  sidebarItems,
  activeSidebarItem,
  onSidebarItemPress,
  children,
  style,
  contentStyle,
}: DashboardLayoutProps) {
  const breakpoint = useWindowWidthBreakpoint([...MOBILE_BREAKPOINTS, ...DESKTOP_BREAKPOINTS]);
  const isMobile = MOBILE_BREAKPOINTS.includes(breakpoint as typeof MOBILE_BREAKPOINTS[number]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSidebarItemPress = useCallback(
    (item: SidebarItem) => {
      onSidebarItemPress?.(item);
      if (isMobile) setMenuOpen(false);
    },
    [onSidebarItemPress, isMobile]
  );

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  if (isMobile) {
    return (
      <Col flex1 style={[{ height: '100%' }, style]}>
        <Row bgWhite pv2 ph2 middle style={styles.mobileHeader}>
          <BurgerButton onPress={() => setMenuOpen(true)} />
          <Text h5 bold>
            Dashboard
          </Text>
          <Col style={{ width: 48 }} />
        </Row>
        <Col flex1 bgSecondary style={contentStyle}>
          {children}
        </Col>
        <Modal
          visible={menuOpen}
          transparent
          animationType="fade"
          onRequestClose={closeMenu}
        >
          <Row style={styles.modalContainer}>
            <Sidebar
              items={sidebarItems}
              activeItemId={activeSidebarItem}
              onItemPress={handleSidebarItemPress}
              showCloseButton
              onClose={closeMenu}
            />
            <Pressable style={styles.backdrop} onPress={closeMenu} />
          </Row>
        </Modal>
      </Col>
    );
  }

  return (
    <Row flex1 style={[{ height: '100%' }, style]}>
      <Sidebar
        items={sidebarItems}
        activeItemId={activeSidebarItem}
        onItemPress={onSidebarItemPress}
      />
      <Col flex1 bgSecondary style={contentStyle}>
        {children}
      </Col>
    </Row>
  );
}

const styles = StyleSheet.create({
  mobileHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  backdrop: {
    flex: 1,
  },
});
