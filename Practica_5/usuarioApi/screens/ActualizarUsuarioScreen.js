import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, Pressable, Alert, Platform, StyleSheet } from 'react-native';
// 1. Importamos los hooks de Expo Router
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function ActualizarUsuarioScreen() {
  const router = useRouter();
  
  const { id, nombreActual, edadActual } = useLocalSearchParams();

  const [nombre, setNombre] = useState(nombreActual || '');
  const [edad, setEdad] = useState(edadActual ? edadActual.toString() : '');
  const [cargando, setCargando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const actualizarUsuario = async () => {
    // Validaciones
    if (nombre.trim() === '' || edad.toString().trim() === '') {
      mostrarMensaje("Vacíos", "Campos Obligatorios");
      return;
    }

    if (!id) {
      mostrarMensaje("Error", "No se encontró el ID del usuario");
      return;
    }

    try {
      setCargando(true);
      // Usamos el ID en la URL y el método PUT para actualizar
      const respuesta = await fetch(`http://192.168.50.49:5012/v1/usuarios/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json",
          "Authorization": "Basic YWRtaW46MTIzNA=="
        },
        body: JSON.stringify({ nombre: nombre, edad: Number(edad) })
      });
      
      const datos = await respuesta.json();
      console.log("Respuesta API", datos);
      mostrarMensaje("Éxito", "Usuario Actualizado");

      // 3. Regresamos a la pantalla anterior usando el router de Expo
      if (router.canGoBack()) {
        router.back();
      }

    } catch (error) {
      console.log("ErrorAPI", error);
      mostrarMensaje("Error", "No fue posible actualizar");
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        
        <Text style={styles.titulo}>Actualizar Usuario</Text>

        <View style={styles.cuadro}>
        <Text style={styles.variable}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />

        {/* Etiqueta y campo para Edad */}
        <Text style={styles.variable}>Edad</Text>
        <TextInput
          style={styles.input}
          placeholder="Edad del usuario"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />

        {/* Botón de guardar cambios */}
        <Pressable 
          style={styles.botonA}
          onPress={actualizarUsuario} 
          disabled={cargando}
        >
          <Text style={styles.textN}>
            {cargando ? "Guardando..." : "Guardar cambios"}
          </Text>
        </Pressable>
        </View>

      </View>
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
  cuadro: {
      backgroundColor: '#FFFFFF',
      borderRadius: 15,
      padding: 18,
      marginBottom: 15,
      elevation: 4,
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
    },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    fontSize: 16,
  },
  variable: {
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  botonA: {
    backgroundColor: '#f8f409',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textN: {
    fontWeight: 'bold',
  },

});