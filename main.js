import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C71212'
    },
    titulo: {
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 22,
        fontSize: 32
    },
    productos: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 5,
        marginBottom: 10,
        width: 300,
        height: 75,
    },
    vista:{
      margin: 10,
      fontSize: 22
    }
});

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bienvenido</Text>
            <Text style={styles.vista}>Recomendaciones</Text>
            <View style={styles.productos}><Text>Recomendaciones</Text></View>
            <Text style={styles.vista}>Recomendaciones</Text>
            <View style={styles.productos}><Text>Ofertas</Text></View>
            <Text style={styles.vista}>Recomendaciones</Text>
            <View style={styles.productos}><Text>Ultimo que viste</Text></View>
        </View>
    );
}