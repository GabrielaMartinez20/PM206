import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Mascota } from './components/Mascota';
import { Nuevo } from './components/Nuevo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Veterinaria</Text>

      <Mascota nombre="perro" especie="chichihuahua" edad="3"></Mascota>
      <Mascota nombre="perro" especie="chichihuahua" edad="3"></Mascota>
      <Mascota nombre="perro" especie="chichihuahua" edad="3"></Mascota>

      <View>
     <Nuevo nombre="Gabi" peso="50" estatura="1.20" alergias="No"></Nuevo>
     <Nuevo nombre="Gabi" peso="50" estatura="1.20" alergias="No"></Nuevo>
     <Nuevo nombre="Gabi" peso="50" estatura="1.20" alergias="No"></Nuevo>
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
