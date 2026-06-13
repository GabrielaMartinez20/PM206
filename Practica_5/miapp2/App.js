/*Zona1: Importaciones de componentes & archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Perfil } from './components/perfil';

/*Zona2: Main - Hogar de los componentes */
export default function App() {
  return (
    <View style={styles.container}>

      <Text>---------------------------Perfiles-------------------------</Text>
      <Perfil nombre="Gabriela Martinez" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>
      <Text>---------------------------------------------------------</Text>
      <Perfil 
      nombre="Isaias Garcia" 
      carrera="Sistemas" 
      materia="Programacion Movil" 
      cuatri="9">
      </Perfil>


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
