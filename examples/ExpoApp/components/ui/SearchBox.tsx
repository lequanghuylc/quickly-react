import React from 'react';
import { TextInput, StyleSheet, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface SearchBoxProps {
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  onClear?: () => void;
  style?: ViewStyle;
}

export function SearchBox({
  value,
  onChangeText,
  placeholder = 'Search…',
  onClear,
  style,
}: SearchBoxProps) {
  return (
    <Row
      middle
      round1
      ph2
      pv1
      gap={8}
      style={[styles.root, style]}
    >
      <MaterialIcons name="search" size={20} color={COLOR.GREYSCALE_500} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLOR.GREYSCALE_500}
        style={styles.input}
      />
      {value.length > 0 && onClear ? (
        <Col onPress={onClear} middle>
          <MaterialIcons name="close" size={20} color={COLOR.GREYSCALE_500} />
        </Col>
      ) : null}
    </Row>
  );
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: COLOR.GREYSCALE_300,
    backgroundColor: COLOR.WHITE,
  },
  input: {
    flex: 1,
    paddingVertical: 4,
    fontSize: 16,
    color: COLOR.GREYSCALE_900,
  },
});
