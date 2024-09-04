import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// Componente funcional Input
export default function Input({ placeholder, value, onChangeText, secureTextEntry }) {
    return (
        <TextInput
            style={styles.input}             // Aplica o estilo definido abaixo
            placeholder={placeholder}        // Define o placeholder do campo
            value={value}                    // Define o valor atual do campo
            onChangeText={onChangeText}      // Função chamada ao alterar o texto
            secureTextEntry={secureTextEntry} // Determina se o texto será oculto (ex: para senhas)
        />
    );
}

// Estilos para o componente Input
const styles = StyleSheet.create({
    input: {
        height: 40,                         // Altura do campo de entrada
        borderColor: 'gray',                // Cor da borda
        borderWidth: 1,                     // Largura da borda
        marginBottom: 20,                   // Espaçamento inferior
        paddingHorizontal: 10,           // Preenchimento interno horizontal
        borderRadius: 10,
    },
});