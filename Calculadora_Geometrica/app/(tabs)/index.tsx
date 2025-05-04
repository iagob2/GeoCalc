import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';
import formarGe from '@/api/formarGe';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

        <View style={styles.imagesContainer}>
       
          {formarGe.map((item) => (
            <TouchableOpacity 
              key={item.id}
              onPress={() => router.push(`/formar?id=${item.id}`)}
              style={styles.formaContainer}
            >
              <Image 
                source={item.imagem} 
                style={styles.geometricImage}
              />
              <ThemedText style={styles.formaNome}>{item.nome}</ThemedText>
            </TouchableOpacity>
          ))}

        </View>

     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
  geometricImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  formaContainer: {
    alignItems: 'center',
    gap: 8,
  },
  formaNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
