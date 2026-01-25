import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface FormFieldProps extends Omit<TextInputProps, 'style'> {
  /** Field label shown above the input */
  label: string;
  /** Current value (controlled) */
  value: string;
  /** Called when value changes */
  onChangeText: (text: string) => void;
  /** Optional error message; when present, border uses error color */
  error?: string;
  /** Optional container style override */
  containerStyle?: ViewStyle;
  /** Optional input style override */
  inputStyle?: TextStyle;
  /** Optional label style override */
  labelStyle?: TextStyle;
}

export function FormField({
  label,
  value,
  onChangeText,
  error,
  containerStyle,
  inputStyle,
  labelStyle,
  placeholder,
  secureTextEntry,
  autoCapitalize = 'none',
  autoCorrect = false,
  keyboardType,
  ...rest
}: FormFieldProps) {
  const hasError = Boolean(error);

  return (
    <Col gap={4} style={containerStyle}>
      <Text small semiBold style={labelStyle}>
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLOR.GREYSCALE_500}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        style={[
          styles.input,
          hasError && styles.inputError,
          inputStyle,
        ]}
        {...rest}
      />
      {error ? (
        <Text xsmall style={styles.errorText}>
          {error}
        </Text>
      ) : null}
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
  inputError: {
    borderColor: COLOR.ERROR,
  },
  errorText: {
    color: COLOR.ERROR,
  },
});
