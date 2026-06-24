/*Zona1: Importaciones de componentes & archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Switch} from 'react-native';
import { useState } from "react";

/*Zona2: Main - Hogar de los componentes */
export default function PressableScreen() {
  const [buttontext, setButtonText] = useState("Dame clic");
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <View style={[styles.container, {backgroundColor: isDarkMode ? "#000000": "#ffffff"}]}>
      <StatusBar
      style={isDarkMode ? "light":"dark"}/>
      <Pressable 
      style={styles.button}
      onPress={() => {console.log("Se  presiono el boton");
        setButtonText("Boton Presionado");
      }}
      
      onPressIn={() =>{
        console.log("Se acaba de presionar  el boton");
      }}

      onPressOut={() =>{
        console.log("Se acaba de soltarr  el boton");
      }}
      onLongPress={() =>{
        console.log("Presion prolongada");
        setButtonText("Presion prolongada detectada");
      }}
      >
        <Text style={styles.buttonText}>{buttontext}</Text>
      </Pressable>

      <View>
      <Text
        style={[styles.text, {color: isDarkMode ? "#ffffff": "#000000"}]}>
        Dark Mode
      </Text>

      <Switch
      value = {isDarkMode}
      onValueChange = {() => setIsDarkMode(!isDarkMode) }
      trackColor={{false: "#01df13", true: "#fd0a0a"}}
      thumbColor={"#770add"}
      />
      </View>
        
  
    </View>
  );
}

/*Zona3: estilos & posicionamiento */
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 10,
        marginBottom: 50 
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%", 
        paddingHorizontal: 10
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
});