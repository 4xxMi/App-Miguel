import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';


import ImageViewer from './src/components/ImageViewer'; 
import Button from './src/components/botao';
const PlaceholderImage = require('./src/assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Escolher uma foto" />
        <Button label="Usar esta foto" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3, 
    alignItems: 'center',
  },
});
