import React, { useState, useCallback } from 'react'; // <-- Agregamos useCallback
import { View, SafeAreaView, Text, Pressable, Alert, Platform, StyleSheet, Modal } from 'react-native';
import { useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router'; 

export default function DetallesUsuarioScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [procesando, setProcesando] = useState(false);
  
  // Nuevo estado para controlar la visibilidad del modal
  const [modalVisible, setModalVisible] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const cargarDatosDelUsuario = async () => {
    try {
      const respuesta = await fetch('http://192.168.50.49:5012/v1/usuarios');
      const datos = await respuesta.json();
      
      const usuarioEncontrado = datos.usuarios.find(
        usuario => usuario.id.toString() === id?.toString()
      );
      
      if (usuarioEncontrado) {
        setNombre(usuarioEncontrado.nombre);
        setEdad(usuarioEncontrado.edad);
      } else {
        mostrarMensaje("Error", "No se encontró la información del usuario.");
      }
    } catch (error) {
      console.log("Error API: ", error);
      mostrarMensaje("Error", "Hubo un problema al consultar la API.");
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (id) {
        cargarDatosDelUsuario();
      }
    }, [id])
  );

  const irPantallaActualizar = () => {
    router.push({
      pathname: '/actualizar',
      params: { id: id, nombreActual: nombre, edadActual: edad }
    });
  };

 const eliminarUsuario = async () => {
    try {
      setProcesando(true);
      
      // Asegúrate de que tu IP y puerto siguen siendo los mismos
      const url = `http://192.168.50.49:5012/v1/usuarios/${id}`;
      console.log("Intentando eliminar en URL:", url);

      const respuesta = await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json",
          "Authorization": "Basic YWRtaW46MTIzNA=="
        }
      });
      
      // Verificamos si la respuesta del servidor NO fue exitosa (diferente a códigos 200-299)
      if (!respuesta.ok) {
        throw new Error(`El servidor respondió con status: ${respuesta.status}`);
      }
      
      console.log("Usuario eliminado exitosamente, status:", respuesta.status);
      mostrarMensaje("Éxito", "Usuario Eliminado");
      
      setModalVisible(false);

      if (router.canGoBack()) {
        router.back();
      }
      
    } catch (error) {
      console.log("Error en la eliminación:", error.message);
      mostrarMensaje("Error", `No fue posible eliminar. Detalle: ${error.message}`);
      setModalVisible(false);
    } finally {
      setProcesando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Detalles del Usuario</Text>

        <View style={styles.cuadro}>
          <Text style={styles.textG}>Nombre</Text>
          <Text style={styles.textN}>{nombre}</Text>
          <View style={styles.linea}></View>
        
          <Text style={styles.textG}>Edad</Text>
          <Text style={styles.textN}>{edad ? `${edad} años` : ''}</Text>
          <View style={styles.linea}></View>

          <Pressable style={styles.botonA} onPress={irPantallaActualizar} disabled={procesando || nombre === ''}>
            <Text style={styles.textN}>Actualizar</Text>
          </Pressable>

          {/* Este botón ahora abre el Modal en lugar de eliminar directamente */}
          <Pressable style={styles.botonE} onPress={() => setModalVisible(true)} disabled={procesando || nombre === ''}>
            <Text style={styles.textE}>Eliminar</Text>
          </Pressable>
        </View>
      </View>

      {/* Estructura del Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Permite cerrar con el botón "Atrás" en Android
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            
            <Text style={styles.modalTitulo}>Confirmar eliminación</Text>
            
            <Text style={styles.modalMensaje}>
              ¿Estás seguro de que deseas eliminar al usuario {nombre}?
            </Text>
            
            <View style={styles.modalBotonesContainer}>
              <Pressable 
                style={styles.botonCancelarModal} 
                onPress={() => setModalVisible(false)}
                disabled={procesando}
              >
                <Text style={styles.textoCancelarModal}>Cancelar</Text>
              </Pressable>

              <Pressable 
                style={styles.botonConfirmarModal} 
                onPress={eliminarUsuario}
                disabled={procesando}
              >
                <Text style={styles.textoConfirmarModal}>
                  {procesando ? "..." : "Sí, eliminar"}
                </Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Modal>

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
  botonA: {
    backgroundColor: '#f8f409',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  botonE: {
    backgroundColor: '#f02a10',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textN: {
    fontWeight: 'bold',
  },
  textE: {
    fontWeight: 'bold',
    color: 'white',
  },
  textG: {
    color: '#9b9999f5',
  },
  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },
  
  /* ESTILOS DEL MODAL */
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro semitransparente
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd1d04',
    marginBottom: 10,
  },
  modalMensaje: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalBotonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  botonCancelarModal: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  botonConfirmarModal: {
    flex: 1,
    backgroundColor: '#dd1d04',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoCancelarModal: {
    color: '#0a0a0a',
    fontWeight: 'bold',
  },
  textoConfirmarModal: {
    color: 'white',
    fontWeight: 'bold',
  }
});