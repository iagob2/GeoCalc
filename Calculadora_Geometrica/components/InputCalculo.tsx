import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputCalculoProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export function InputCalculo({ placeholder, value, onChangeText }: InputCalculoProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
}); 