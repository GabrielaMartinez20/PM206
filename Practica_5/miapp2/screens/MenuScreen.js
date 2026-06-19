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
                    <Text> Menu de Practicas </Text>
                    <Button style={styles.button} onPress={()=>setScreen('tarjetas')} title='Tarjetas'/>
                    <Button onPress={()=>setScreen('safeArea')} title='SafeAreaView'/>
                    <Button onPress={()=>setScreen('pressable')} title='PressableView'/>
                    <Button onPress={()=>setScreen('textInput')} title='TextInputView'/>
                    <Button onPress={()=>setScreen('flatList')} title='FlatListView'/>
                    <Button onPress={()=>setScreen('imageBackgroung')} title='ImagineBackgroungView'/>
                    <Button onPress={()=>setScreen('activityIndicator')} title='ActivityIndicatorView'/>
                    <Button onPress={()=>setScreen('modal')} title='ModalView'/>
                    <StatusBar style="auto" />
                </View>
            );
    }
  
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
