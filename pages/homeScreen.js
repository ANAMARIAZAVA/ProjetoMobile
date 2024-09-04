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
      navigation.navigate('perfil', {
  });
}

  useEffect(() => {
    console.log('Tela Home carregada');
  }, [username, password]);

  return (
    <View style={styles.container}>
      <Text> Bem-vindo à Home! </Text>
      {username && <Text>Usuário Logado: {username}</Text>}
      <Image source={require('../assets/bike.png')}/>
      <TouchableOpacity style={styles.button} onPress={produto}>
              <Text style={styles.textButton}>Produtos</Text>
            </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={produto}>
      <Text style={styles.textButton}>perfil</Text>
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
    backgroundColor: '#f0f0f0',
  },
  backgroundContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center', // Centraliza o conteúdo
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20, // Espaço entre a imagem e os campos de input
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    height: 45,
    width: '100%',
  },
  textButton: {
    fontSize: 18,
    color: 'white',
  },
});