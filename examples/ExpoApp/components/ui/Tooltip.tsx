import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import type { ReactNode } from 'react';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface TooltipProps {
  text: string;
  children: ReactNode;
  style?: ViewStyle;
}

export function Tooltip({ text, children, style }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <Col style={style}>
      <Pressable onPress={() => setVisible(true)}>
        {children}
      </Pressable>
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.overlay}>
          <Pressable style={StyleSheet.absoluteFill} onPress={() => setVisible(false)} />
          <View style={styles.tooltipWrap} pointerEvents="box-none">
            <Col p3 round1 bgWhite shadow style={styles.tooltip}>
              <Text small style={{ color: COLOR.GREYSCALE_900 }}>
                {text}
              </Text>
            </Col>
          </View>
        </View>
      </Modal>
    </Col>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  tooltipWrap: {
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  tooltip: {
    maxWidth: 280,
  },
});
