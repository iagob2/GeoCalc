import React from 'react';
import { InputCalculo } from '@/components/InputCalculo';

interface Medidas {
  base: string;
  altura: string;
  raio: string;
}

type Props = {
  formaId: number;
  medidas: Medidas;
  onChange: (campo: keyof Medidas, valor: string) => void;
};

export default function RenderInputs({ formaId, medidas, onChange }: Props) {
  switch (formaId) {
    case 1: // Triângulo
    case 3: // Retângulo
      return (
        <>
          <InputCalculo placeholder="Base" value={medidas.base} onChangeText={text => onChange('base', text)} />
          <InputCalculo placeholder="Altura" value={medidas.altura} onChangeText={text => onChange('altura', text)} />
        </>
      );
    case 2: // Quadrado
      return (
        <InputCalculo placeholder="Lado" value={medidas.base} onChangeText={text => onChange('base', text)} />
      );
    case 4: // Círculo
      return (
        <InputCalculo placeholder="Raio" value={medidas.raio} onChangeText={text => onChange('raio', text)} />
      );
    default:
      return null;
  }
}
