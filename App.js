import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './App.js';
import MainScreen from './main.js';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Flash</Text>
        <Text style={styles.title}>Store</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.solidButton}>
          <Button title="Iniciar sesión" color="grey" onPress={handleLogin}></Button>
        </View>
        <Text style={styles.registro}>¿No tienes cuenta? Registrate</Text>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C71212'
  },
  title: {
    fontSize: 52,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 250
  },
  solidButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  registro: {
    color: "white",
    marginTop: 50
  }
});

export default LoginScreen;
