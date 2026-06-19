/*Zona1: Importaciones de componentes & archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


/*Zona2: Main - Hogar de los componentes */
export default function SafeAreaScreen() {
  return (
    <View style={styles.container}>
        <Text>Aqui va la practica 4</Text>
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
});
