import React, { useState } from 'react';
import { View, TextInput, Button, Platform, Alert, StyleSheet, Keyboard, Text, Switch} from 'react-native';

export default function TextInputScreen() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [cuatri, setCuatri] = useState('');
  const [isAsistir, setIsAsistir] = useState(false);
  const [isConst, setIsConst] = useState(false);
  const [isDeporte, setIsDeporte] = useState(false);

   const alertasManager = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      alert(`${titulo}: ${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const procesarRegistro = () => {
    if (Platform.OS !== 'web') Keyboard.dismiss();

    if (!nombre || !carrera || !cuatri) {
      alertasManager("Validación", "Todos los campos son obligatorios.");
      return;
    }

    const mensaje = `\n\nNombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${cuatri}\n\nTaller: ${isAsistir ? 'Sí' : 'No'}\nConstancia: ${isConst ? 'Sí' : 'No'}\nDeportes: ${isDeporte ? 'Sí' : 'No'}`;
  alertasManager("Registro enviado", mensaje);
};

  return (
    <View style={styles.container}>
      <View style={styles.recuadro}>

      <Text style={styles.titulo}>REGISTRO DE EVENTO UNIVERSITARIO</Text>

      <TextInput style={styles.input} placeholder="Nombre Completo" value={nombre} onChangeText={setNombre} />
      
      <TextInput style={styles.input} placeholder="Carrera" value={carrera} onChangeText={setCarrera} />
      
      <TextInput style={styles.input} placeholder="Cuatrimestre" value={cuatri} onChangeText={setCuatri} keyboardType="numeric" maxLength={2} />
      
      <Text style={styles.titulo}>Opciones</Text>

      <View style={styles.preguntas}>
      <Text>¿Asistirá al taller?</Text>
      <Switch
            value = {isAsistir}
            onValueChange = {() => setIsAsistir(!isAsistir) }
            trackColor={{false: "#12d4f6", true: "#0af20e"}}
            thumbColor={"#770add"}
            />
       </View>

      <View style={styles.preguntas}>
      <Text>¿Requiere constancia?</Text>
      <Switch
            value = {isConst}
            onValueChange = {() => setIsConst(!isConst) }
            trackColor={{false: "#12d4f6", true: "#0af20e"}}
            thumbColor={"#770add"}
            />
      </View>
            
      <View style={styles.preguntas}>
      <Text>¿Participará en deportes?</Text>
      <Switch
            value = {isDeporte}
            onValueChange = {() => setIsDeporte(!isDeporte) }
            trackColor={{false: "#12d4f6", true: "#0af20e"}}
            thumbColor={"#770add"}
            />
      </View>

      <Button title="Enviar Registro" onPress={procesarRegistro} color={'#059505'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center', 
    padding: 20, 
    flexDirection: 'row',
    backgroundColor: '#62e70a',
    alignItems: 'center'
  },
  recuadro: {
    backgroundColor: '#fbffff',
    padding: 40,
    height: '60%',
    borderRadius: 12,
    width: '85%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#098005', 
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 12, 
    backgroundColor: '#fff' },
  titulo: {
    fonSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',},
  preguntas: {
    flexDirection: 'row',        
    alignItems: 'center',        
    justifyContent: 'space-between', 
    marginVertical: 10,
  },
});