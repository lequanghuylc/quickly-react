import React from 'react';
import { TextInput, TextInputProps, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  value: string;
  onChangeText: (t: string) => void;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
}

export function Input({
  label,
  value,
  onChangeText,
  error,
  containerStyle,
  inputStyle,
  labelStyle,
  placeholder,
  placeholderTextColor = COLOR.GREYSCALE_500,
  ...rest
}: InputProps) {
  const hasError = Boolean(error);
  return (
    <Col gap={4} style={containerStyle}>
      {label ? (
        <Text small semiBold style={labelStyle}>
          {label}
        </Text>
      ) : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, hasError && styles.inputError, inputStyle]}
        {...rest}
      />
      {error ? <Text xsmall style={styles.error}>{error}</Text> : null}
    </Col>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLOR.GREYSCALE_300,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: COLOR.GREYSCALE_900,
    backgroundColor: COLOR.WHITE,
  },
  inputError: { borderColor: COLOR.ERROR },
  error: { color: COLOR.ERROR },
});
