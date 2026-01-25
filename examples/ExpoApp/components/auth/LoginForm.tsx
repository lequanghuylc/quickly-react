import React, { useState } from 'react';
import { Col, Text } from '@/components/base';
import { FormField } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();

  const validate = (): boolean => {
    let valid = true;
    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else {
      setEmailError(undefined);
    }
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError(undefined);
    }
    return valid;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    // TODO: call login API
  };

  return (
    <Col gap={16} p4 round2 borderThin bgWhite style={{ flex: 1, minWidth: 280 }}>
      <Text h4 bold mb2>
        Sign in
      </Text>
      <FormField
        label="Email"
        value={email}
        onChangeText={(t) => { setEmail(t); setEmailError(undefined); }}
        placeholder="you@example.com"
        keyboardType="email-address"
        error={emailError}
      />
      <FormField
        label="Password"
        value={password}
        onChangeText={(t) => { setPassword(t); setPasswordError(undefined); }}
        placeholder="••••••••"
        secureTextEntry
        error={passwordError}
      />
      <Button title="Sign in" onPress={handleSubmit} variant="primary" />
    </Col>
  );
}
