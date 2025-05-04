import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { InputCalculo } from '@/components/InputCalculo';

interface FormaGeometrica {
  id: number;
  nome: string;
  imagem: any;
}

interface CalculadoraFormasProps {
  forma: FormaGeometrica;
}

export default function CalculadoraFormas({ forma }: CalculadoraFormasProps) {
  const [medidas, setMedidas] = useState({
    base: '',
    altura: '',
    raio: '',
  });
  const [resultado, setResultado] = useState<number | null>(null);

  const handleInputChange = (campo: keyof typeof medidas, valor: string) => {
    setMedidas(prev => ({ ...prev, [campo]: valor }));
  };

  const calcularArea = () => {
    const base = parseFloat(medidas.base);
    const altura = parseFloat(medidas.altura);
    const raio = parseFloat(medidas.raio);

    let area = 0;

    switch (forma.id) {
      case 1: // Triângulo
        if (!isNaN(base) && !isNaN(altura)) {
          area = (base * altura) / 2;
        }
        break;
      case 2: // Quadrado
        if (!isNaN(base)) {
          area = base * base;
        }
        break;
      case 3: // Retângulo
        if (!isNaN(base) && !isNaN(altura)) {
          area = base * altura;
        }
        break;
      case 4: // Círculo
        if (!isNaN(raio)) {
          area = Math.PI * raio * raio;
        }
        break;
    }

    setResultado(area || 0);
  };

  const renderInputs = () => {
    switch (forma.id) {
      case 1:
      case 3:
        return (
          <>
            <InputCalculo
              placeholder="Base"
              value={medidas.base}
              onChangeText={text => handleInputChange('base', text)}
            />
            <InputCalculo
              placeholder="Altura"
              value={medidas.altura}
              onChangeText={text => handleInputChange('altura', text)}
            />
          </>
        );
      case 2:
        return (
          <InputCalculo
            placeholder="Lado"
            value={medidas.base}
            onChangeText={text => handleInputChange('base', text)}
          />
        );
      case 4:
        return (
          <InputCalculo
            placeholder="Raio"
            value={medidas.raio}
            onChangeText={text => handleInputChange('raio', text)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Cálculo - {forma.nome}</ThemedText>

      <View style={styles.inputsContainer}>{renderInputs()}</View>

      <TouchableOpacity style={styles.button} onPress={calcularArea}>
        <ThemedText style={styles.buttonText}>Calcular Área</ThemedText>
      </TouchableOpacity>

      {resultado !== null && (
        <ThemedText style={styles.resultado}>
          Área: {resultado.toFixed(2)} unidades²
        </ThemedText>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputsContainer: {
    gap: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
