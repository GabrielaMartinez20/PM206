/*Zona1: Importaciones de componentes & archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from '../components/perfil';

/*Zona2: Main - Hogar de los componentes */
export default function TargetasScreen() {
  return (
    <View style={styles.container}>

      <Perfil estiloE={styles.tarjetaRoja} nombre="Gabriela Martinez" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>
      <Perfil estiloE={styles.tarjetaVerde}
      nombre="Isaias Garcia" 
      carrera="Sistemas" 
      materia="Programacion Movil" 
      cuatri="9">
      </Perfil>
      <Perfil estiloE={styles.tarjetaRoja} nombre="Gabriela GG" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>


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
    flexDirection: 'column'
  },
  tarjetaRoja: {backgroundColor: '#FF6B6B'},
  tarjetaVerde: {backgroundColor:'#6BCB77'},
});
