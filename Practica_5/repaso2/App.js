import { StatusBar} from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, Modal, 
  Platform, TextInput, Pressable, FlatList, Keyboard, Alert, Image } from 'react-native';

export default function App() {
  //Vista del Splash Screen
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  // Efecto
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  //Diccionario para libros
  const [libro, setLibros] = useState([
      { titulo: 'UNO', autor: 'Gabi M', genero: 'Ficcion' },
      { titulo: 'DOS', autor: 'Laura M', genero: 'Ficcion' },
      { titulo: 'TRES', autor: 'Marian M', genero: 'Ficcion' },
      { titulo: 'CUATRO', autor: 'Isaac M', genero: 'Ficcion' },
      { titulo: 'CINCO', autor: 'Coral M', genero: 'Ficcion' },
      { titulo: 'SEIS', autor: 'Ian M', genero: 'Ficcion' },
    ]);
//Variables para los libros
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  //Variable para Activity Indicator
  const [isLoading, setIsLoading] = useState(false);

  //Funcion para procesar el registro de libros
  const procesarRegistro = () => {
    if (Platform.OS !== 'web') Keyboard.dismiss();
  
    //Validacion de campos llenos
    if (!titulo || !autor || !genero) {
      Alert.alert("Alert", "Todos los campos son obligatorios.");
      return;
    }

    //Activar el Activity Indicator
    setIsLoading(true);

    // Simular espera de 4 segundos
    setTimeout(() => {
      //Agregar el libro a la FlatList
      const nuevoLibro = { titulo, autor, genero };
      setLibros(prevLibros => [...prevLibros, nuevoLibro]);

      //Limpiar los TextInput
      setTitulo('');
      setAutor('');
      setGenero('');

      // Desactivar el Activity Indicator
      setIsLoading(false);

      //Notificar con un Alert de éxito
      Alert.alert("Alert", "Libro guardado correctamente.");
    }, 4000);
  };

  //Vista de Splash Screen
  if (isSplashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Image 
          source={require('./assets/wave.png')} 
          style={styles.splashImage}
        />
        <Text style={styles.splashText}>¡Bienvenido a repaso 2!</Text>
      </View>
    );
  }
//Return principal
  return (
    //Imagen de fondo
      <ImageBackground
        source={{ uri: 'https://picsum.photos/500/900' }}
        style={styles.background}
        resizeMode="cover"
      >
      <View>
        <Text style={styles.titulo}>Catálogo de libros</Text>

        <TextInput 
        style={styles.input} 
        placeholder="Titulo del libro" 
        value={titulo}
        onChangeText={setTitulo}
        />
        <TextInput 
        style={styles.input} 
        placeholder="Autor" 
        value={autor}
        onChangeText={setAutor}
        />
        <TextInput 
        style={styles.input} 
        placeholder="Genero" 
        value={genero}
        onChangeText={setGenero}
        />
        <Pressable
          style={[styles.button, isLoading && { opacity: 0.7 }]}
          onPress={procesarRegistro}
          disabled={isLoading}
        >
          {/* Efecto en el boton para el cambio de texto */}
          <Text style={styles.textBoton}>
            {isLoading ? 'Guardando...' : 'Agregar Libro'}
          </Text>
        </Pressable>
        <View style={styles.actionArea}>
          {isLoading && (
            <ActivityIndicator size="large" color="#2bfc01" style={styles.loader} />
          )}
        </View>
        </View>
      
      {/* FlatList para los libros registrados */}
      <Text>Total de libros: {libro.length}</Text>
      <FlatList
      data={libro}
      keyExtractor={(item) => item.titulo}
      scrollEnabled={true}
      renderItem={({ item }) => (
      <View style={styles.itemFlat}>
        <Text style={styles.texto}>{item.titulo}</Text>
        <Text>Autor: {item.autor}</Text>
        <Text>Genero: {item.genero}</Text>
      </View>
      )}
      />
      
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  safe: {
    flex: 1,
    backgroundColor: "#ebfc53",
  },
  button: {
    backgroundColor: "#f5ab0b",
    padding: 20,
    borderRadius: 30,
    marginBottom: 50,
  }, 
  textBoton: {
    fontSize: 20,
    textAlign: "center"
  },
  itemFlat: {
    backgroundColor: "#ffffffa4",
    borderRadius: 10,
    marginBottom: 40,
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#f5ab0b', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  actionArea: {
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#080808',
    padding: 20,
  },
  input: {
    height: 50, 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  loader: {
    marginVertical: 10,
  },
});