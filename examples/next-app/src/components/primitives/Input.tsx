import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export const INPUT_ID = 'input';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  buttonLabel?: string;
  onButtonPress?: () => void;
  id?: string;
}

export function Input({
  label,
  placeholder,
  error,
  helperText,
  buttonLabel,
  onButtonPress,
  id = INPUT_ID,
  ...textInputProps
}: InputProps) {
  return (
    <Col id={id} gap={1}>
      {label && (
        <Text sm medium style={{ color: COLOR.GREYSCALE_700 }}>
          {label}
        </Text>
      )}
      <Row gap={buttonLabel ? 2 : 0}>
        <Col flex1>
          <TextInput
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
            }}
            {...textInputProps}
          />
        </Col>
        {buttonLabel && (
          <Col
            round1
            ph4
            pv2
            middle
            style={{
              backgroundColor: COLOR.PRIMARY_500,
              cursor: 'pointer',
            }}
            onPress={onButtonPress}
          >
            <Text base medium style={{ color: COLOR.WHITE }}>
              {buttonLabel}
            </Text>
          </Col>
        )}
      </Row>
      {(error || helperText) && (
        <Text xs style={{ color: error ? COLOR.ERROR : COLOR.GREYSCALE_500 }}>
          {error || helperText}
        </Text>
      )}
    </Col>
  );
}
