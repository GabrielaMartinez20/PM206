/*Zona1: Importaciones de componentes & archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Perfil } from '../components/perfil';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

/*Zona2: Main - Hogar de los componentes */
export default function SafeAreaScreen() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <SafeAreaView>
        <Text style={styles.titulo}>AREA SEGURA</Text>
      </SafeAreaView>
    
    <ScrollView
    showsVerticalScrollIndicator={true}>
    <View style={styles.container}>

      <Perfil estiloE={styles.tarjetaRoja} nombre="Gabriela Martinez" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>
      <Perfil estiloE={styles.tarjetaVerde} nombre="Gabriela Martinez" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>
      <Perfil estiloE={styles.tarjetaRoja} nombre="Gabriela Martinez" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>
      <Perfil estiloE={styles.tarjetaVerde} nombre="Gabriela Martinez" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>
      <Perfil estiloE={styles.tarjetaRoja} nombre="Gabriela Martinez" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>
      <Perfil estiloE={styles.tarjetaVerde} nombre="Gabriela Martinez" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>
      <Perfil estiloE={styles.tarjetaRoja} nombre="Gabriela Martinez" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
      <SafeAreaView>
        <Text style={styles.titulo}>AREA SEGURA</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/*Zona3: estilos & posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbf863',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  tarjetaRoja: {backgroundColor: '#FF6B6B'},
  tarjetaVerde: {backgroundColor:'#6BCB77'},
  safeArea: {
    flex: 1,
    backgroundColor: '#2d0bee',
  },
  titulo: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

