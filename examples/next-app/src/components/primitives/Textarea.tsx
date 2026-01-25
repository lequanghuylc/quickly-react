import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const TEXTAREA_ID = 'textarea';

export interface TextareaProps extends Omit<TextInputProps, 'style' | 'multiline'> {
  label?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  rows?: number;
  id?: string;
}

export function Textarea({
  label,
  placeholder,
  error,
  helperText,
  rows = 4,
  id = TEXTAREA_ID,
  ...textInputProps
}: TextareaProps) {
  return (
    <Col id={id} gap={1}>
      {label && (
        <Text sm medium style={{ color: COLOR.GREYSCALE_700 }}>
          {label}
        </Text>
      )}
      <TextInput
        multiline
        numberOfLines={rows}
        placeholder={placeholder}
        placeholderTextColor={COLOR.GREYSCALE_400}
        style={{
          borderWidth: 1,
          borderColor: error ? COLOR.ERROR : COLOR.GREYSCALE_300,
          borderRadius: 6,
          paddingHorizontal: 12,
          paddingVertical: 8,
          fontSize: 14,
          color: COLOR.GREYSCALE_900,
          backgroundColor: COLOR.WHITE,
          minHeight: rows * 24,
          textAlignVertical: 'top',
        }}
        {...textInputProps}
      />
      {(error || helperText) && (
        <Text xs style={{ color: error ? COLOR.ERROR : COLOR.GREYSCALE_500 }}>
          {error || helperText}
        </Text>
      )}
    </Col>
  );
}
