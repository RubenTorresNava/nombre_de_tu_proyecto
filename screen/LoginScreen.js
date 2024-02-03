// En LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleLogin = () => {
    if (email === 'usuario@example.com' && password === 'contraseña') {
      navigation.navigate('MainScreen');
    } else {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
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
          {error && <Text style={styles.error}>{error}</Text>}
          <Button title="Iniciar sesión" color="grey" onPress={handleLogin}></Button>
        </View>
        <Text style={styles.registro}>¿No tienes cuenta? Registrate</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C71212',
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
    width: 250,
  },
  solidButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  registro: {
    color: 'white',
    marginTop: 50,
  },
});

export default LoginScreen;
