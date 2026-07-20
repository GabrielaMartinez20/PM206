import { Text, View, Button, StyleSheet} from "react-native";
import React,{useState} from 'react';

export const Mascota= ({nombre,especie,edad}) => {
    const [mostrar,setMostrar]= useState(false)
    return(
        <View>
            <View style={estilos.tarjeta}>
            <Text>Nombre: {nombre}</Text>    
            <Text>Especie: {especie}</Text>
            <Text>Edad: {edad}</Text>
        
        </View>
        
        </View>
    )
}
const estilos= StyleSheet.create({
    nombre: {
        fontSize:24,
        fontWeight:700,
        textTransform:"uppercase" 
    },
    tarjeta:{
        borderWidth:3,
        margin:20,
        padding:25,
    },

});