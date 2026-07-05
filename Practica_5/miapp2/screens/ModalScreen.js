/* Zona 1: Importaciones de componentes y archivos */
import { StatusBar } from "expo-status-bar";
import React, { use, useState } from "react";
import { StyleSheet, Text, View, Button, Modal, Pressable, } from "react-native";

/* Zona 2: Main - Hogar de los componentes */
export default function ModalScreen() {
    const [BottomSheet, setBottomSheet] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style = {styles.container}>
            <Text style = {styles.titulo}>Ejemplo de Modal y BottomSheet</Text>
            <Button color='#d3d604e1' title = "Abrir BottomSheet" onPress = {() => setBottomSheet(true)}/>

            <Modal 
                animationType = "slide" 
                transparent = {true} 
                visible = {BottomSheet}
            >
                <View style = {styles.fondo}>
                    <View style = {styles.bottomSheet}>
                        <Text style = {styles.texto}>Hola, esto es un BottomSheet</Text>
                        <Pressable style = {styles.boton} onPress = {() => setBottomSheet(false)}>
                            <Text style = {styles.textoBoton}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            
            <Button color='#d3d604e1' title = "Abrir Modal" onPress = {() => setModalVisible(true)}/>
            <Modal 
                animationType = "slide" 
                transparent = {true} 
                visible = {modalVisible}
            >
                <View style = {styles.fmodal}>
                    <View style = {styles.modal}>
                        <Text style = {styles.texto}>Hola, esto es un Modal</Text>
                        <Pressable style = {styles.boton} onPress = {() => setModalVisible(false)}>
                            <Text style = {styles.textoBoton}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <StatusBar style = "auto"/>
        </View>
    );
}

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#ffff", 
    }, 
    titulo: {
        fontSize: 24, 
        fontWeight: "bold", 
        marginBottom: 20, 
    }, 
    fondo: {
        flex: 1, 
        justifyContent: "flex-end", 
        backgroundColor: "rgba(0,0,0,0.4)", 
    }, 
    bottomSheet: {
        backgroundColor: "#b009f1", 
        padding: 25, 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        alignItems: "center", 
    }, 
    texto: {
        fontSize: 16, 
        marginBottom: 20, 
    }, 
    boton: {
        backgroundColor: "#dee203e1", 
        paddingHorizontal: 25, 
        paddingVertical: 10, 
        borderRadius: 40, 
    }, 
    textoBoton: {
        color: "#fff", 
        fontWeight: "bold", 
    }, 
    fmodal:{
      flex:1,
      alignItems: "center",
      justifyContent: "center",
    },
    modal: {
      alignItems: "center",
      justifyContent: "center",
      height:200,
      width:200,
      backgroundColor:'#b009f1',
      borderRadius: 40,
    },
});