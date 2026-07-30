import React, {useState, useEffect} from 'react';
import {SafeAreaView,View,Text,FlatList,StyleSheet,} from 'react-native';

export default function ConsultaUsuariosScreen() {

  const [usuarios, setUsuarios] = useState([]);
  //para cualquier circunstacia se prepara con una funcion asincrona, cuando se consultan recursos externos
  const obtenerUsuarios = async ()=>{
    try {
      //si usamos el tel usamos la ip de la lap cambiando localhost
      const respuesta = await fetch('http://192.168.50.49:5012/v1/usuarios');
      const datos = await respuesta.json();
      console.log("Respuesta: ", datos);
      //ser especificos en lo que se va a obtener
      setUsuarios(datos.usuarios)
    } catch (error) {
        console.log("Error API: ", error);
    }
  };
  useEffect(()=>{obtenerUsuarios();},[])

  

  const renderTarjeta = ({ item }) => (
    <View style={styles.card}>

      <Text style={styles.nombre}>{item.nombre}</Text>

      <View style={styles.linea}></View>

      <Text style={styles.info}>
        Edad: {item.edad} años
      </Text>

    </View>
  );

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Usuarios
      </Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={renderTarjeta}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
  },

  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },

  info: {
    fontSize: 16,
    color: '#4B5563',
  },

});