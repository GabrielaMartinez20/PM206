/*Zona1: Importaciones de componentes & archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React,{useState} from 'react';

import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroungScreen from './SafeAreaScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalScreen from './ModalScreen';


/*Zona2: Main - Hogar de los componentes */
export default function MenuScreen() {
    const [screen, setScreen]= useState('menu');

    switch (screen) {
        case 'tarjetas':
            return <TarjetasScreen />
        case 'safeArea':
            return <SafeAreaScreen />
        case 'pressable':
            return <Pressable />
        case 'textInput':
            return <TextInput />
        case 'flatList':
            return <FlatList />
        case 'imageBackgroung':
            return <ImageBackgroung />
        case 'activityIndicator':
            return <ActivityIndicator />
        case 'modal':
            return <Modal />
        case 'menu':
            default:
             return (
                <View style={styles.container}>
                    <Text style={styles.titulo}> Menu de Practicas </Text>
                    <Button color='#8ece18' onPress={()=>setScreen('tarjetas')} title='Tarjetas'/>
                    <Button color='#8ece18' onPress={()=>setScreen('safeArea')} title='SafeAreaView'/>
                    <Button color='#8ece18' onPress={()=>setScreen('pressable')} title='PressableView'/>
                    <Button color='#8ece18' onPress={()=>setScreen('textInput')} title='TextInputView'/>
                    <Button color='#8ece18' onPress={()=>setScreen('flatList')} title='FlatListView'/>
                    <Button color='#8ece18' onPress={()=>setScreen('imageBackgroung')} title='ImagineBackgroungView'/>                        <Button color='#8ece18' onPress={()=>setScreen('activityIndicator')} title='ActivityIndicatorView'/>
                    <Button color='#8ece18' onPress={()=>setScreen('modal')} title='ModalView'/>
                    <StatusBar style="auto" />
                </View>
            );
    }
  
}

/*Zona3: estilos & posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b44ee7',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'space-between',
    padding: 30,
    borderRadius: 20,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  
});
