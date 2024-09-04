// pages/PerfilScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página de Perfil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 24,
        color: '#333',
    },
});