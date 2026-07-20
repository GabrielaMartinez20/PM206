import { useState } from "react";
import { View, Text, StyleSheet } from "react-native-web";

export const Nuevo = ({nombre, peso, estatura, alergias}) => {
    const [mostrar, setMostrar] = useState(false);
    return(
        <View>
        <View style={styles.tarjeta}>
            <Text>Nombre: {nombre}</Text>
            <Text>Peso: {peso}</Text>
            <Text>Estatura: {estatura}</Text>
            <Text>alergias: {alergias}</Text>


        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    tarjeta: {
        borderRadius: 3,
        margin: 20,
        padding: 30,
    },
})