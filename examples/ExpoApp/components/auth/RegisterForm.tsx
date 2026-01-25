import React, { useState } from 'react';
import { Col, Text } from '@/components/base';
import { FormField } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState<string | undefined>();
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [confirmError, setConfirmError] = useState<string | undefined>();

  const validate = (): boolean => {
    let valid = true;
    if (!name.trim()) {
      setNameError('Name is required');
      valid = false;
    } else {
      setNameError(undefined);
    }
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
    if (password !== confirmPassword) {
      setConfirmError('Passwords do not match');
      valid = false;
    } else {
      setConfirmError(undefined);
    }
    return valid;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    // TODO: call register API
  };

  return (
    <Col gap={16} p4 round2 borderThin bgWhite style={{ flex: 1, minWidth: 280 }}>
      <Text h4 bold mb2>
        Create account
      </Text>
      <FormField
        label="Name"
        value={name}
        onChangeText={(t) => { setName(t); setNameError(undefined); }}
        placeholder="Your name"
        autoCapitalize="words"
        error={nameError}
      />
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
      <FormField
        label="Confirm password"
        value={confirmPassword}
        onChangeText={(t) => { setConfirmPassword(t); setConfirmError(undefined); }}
        placeholder="••••••••"
        secureTextEntry
        error={confirmError}
      />
      <Button title="Create account" onPress={handleSubmit} variant="primary" />
    </Col>
  );
}
