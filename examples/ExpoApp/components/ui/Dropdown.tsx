import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface DropdownOption {
  id: string;
  label: string;
}

export interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value: string | null;
  onSelect: (id: string) => void;
  placeholder?: string;
  style?: ViewStyle;
}

export function Dropdown({
  label,
  options,
  value,
  onSelect,
  placeholder = 'Select…',
  style,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.id === value);

  const handleSelect = (id: string) => {
    onSelect(id);
    setOpen(false);
  };

  return (
    <Col gap={4} style={style}>
      <Text small semiBold>{label}</Text>
      <Col round1 borderThin bgWhite overflow="hidden">
        <Row
          onPress={() => setOpen(true)}
          middle
          ph3
          pv2
          style={{ justifyContent: 'space-between' }}
        >
          <Text bmedium style={{ color: selected ? COLOR.GREYSCALE_900 : COLOR.GREYSCALE_500 }}>
            {selected?.label ?? placeholder}
          </Text>
          <MaterialIcons
            name={open ? 'expand-less' : 'expand-more'}
            size={24}
            color={COLOR.GREYSCALE_600}
          />
        </Row>
      </Col>
      <Modal visible={open} transparent animationType="fade">
        <View style={styles.modal}>
          <Pressable style={StyleSheet.absoluteFill} onPress={() => setOpen(false)} />
          <View style={styles.menuWrap} pointerEvents="box-none">
            <Col bgWhite round2 style={styles.menu}>
              {options.map((opt) => (
                <Col
                  key={opt.id}
                  onPress={() => handleSelect(opt.id)}
                  ph3
                  pv2
                  style={value === opt.id ? styles.optionActive : undefined}
                >
                  <Text bmedium style={{ color: value === opt.id ? COLOR.PRIMARY_500 : COLOR.GREYSCALE_900 }}>
                    {opt.label}
                  </Text>
                </Col>
              ))}
            </Col>
          </View>
        </View>
      </Modal>
    </Col>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  menuWrap: {
    width: '100%',
    maxWidth: 320,
  },
  menu: {
    overflow: 'hidden' as const,
  },
  optionActive: {
    backgroundColor: COLOR.PRIMARY_100,
  },
});
