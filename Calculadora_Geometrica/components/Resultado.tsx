import React from 'react';
import { ThemedText } from '@/components/ThemedText';

type Props = {
  valor: number | null;
};

export default function Resultado({ valor }: Props) {
  if (valor === null) return null;

  return (
    <ThemedText style={{ marginTop: 20, fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>
      Área: {valor.toFixed(2)} unidades²
    </ThemedText>
  );
}
