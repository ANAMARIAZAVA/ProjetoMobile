import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';


export default function HomeScreen({ route, navigation }) {
  const { username, password } = route.params || {};
  
// Função para navegar para a tela de Produtos
    const produto = () => {
            navigation.navigate('Produto', {
        });
    }

// Função para navegar para a tela de Perfil
    const perfil = () => {
          navigation.navigate('Perfil', {
  });
}

  useEffect(() => {
    console.log('Tela Home carregada');
  }, [username, password]);

  return (
    <View style={styles.container}>
      {/* Texto de boas-vindas */}
      <Text style={styles.welcomeText}>
          Seja Bem-vindo</Text>
      {username && <Text> {username}</Text>}

      {/* Imagem da bicicleta */}
      <Image source={require('../assets/bike.png')}
      style={styles.bikeImage}
      />
      
      {/* Botão para Perfil */}
      <TouchableOpacity style={styles.button} onPress={perfil}>
          <Text style={styles.textButton}>Perfil</Text>
      </TouchableOpacity>


      {/* Botão para Produtos */}
      <TouchableOpacity style={styles.button} onPress={produto}>
           <Text style={styles.textButton}>Produtos</Text>
      </TouchableOpacity>

    
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff', // Fundo branco
  },

  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,  // Espaço abaixo do texto de boas-vindas
  },
  
  bikeImage: {
    width: 150,  // tamanho da imagem
    height: 150,
    marginBottom: 30,  // abaixo da imagem
  },
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8B4513',  // Cor marrom para combinar com a imagem fornecida
      borderRadius: 10,
      paddingVertical: 10,
      width: '80%',  // Largura dos botões para 80% da tela
      marginBottom: 10,  // Espaço entre os botões
  },
  textButton: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',  // Deixar o texto do botão em negrito
  },
});