import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import formarGe from '@/api/formarGe';
import CalculadoraFormas from '@/components/CalculadoraFormas';

export default function FormarScreen() {
  const { id } = useLocalSearchParams();
  const forma = formarGe.find(f => f.id === Number(id));

  if (!forma) {
    return (
      <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ThemedText>Forma geométrica não encontrada</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <Image 
        source={forma.imagem} 
        style={styles.imagem}
        contentFit="contain"
      />
      <CalculadoraFormas forma={forma} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    marginTop: 50,
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});
