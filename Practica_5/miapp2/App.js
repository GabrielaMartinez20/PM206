/*Zona1: Importaciones de componentes & archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/perfil';

/*Zona2: Main - Hogar de los componentes */
export default function App() {
  return (
    <View style={styles.container}>

      <Text>-------Componentes Nativos------------</Text>
      <Image source={require('./assets/wave.png')}></Image>
      <Text>HOLA MUNDOOOOOOOO RN!</Text>

      <Text>-----------------Componente Simple-----------------</Text>
      <Saludo></Saludo>
      <Text>-----------------Componente Compuesto-----------------</Text>
      <Saludo2></Saludo2>
      <Text>-----------------Datos Personales-----------------</Text>
      <Perfil></Perfil>
      <StatusBar style="auto" />
    </View>
  );
}

/*Zona3: estilos & posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
