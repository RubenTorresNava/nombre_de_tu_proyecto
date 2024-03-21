import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const App = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/mitiendita');
        console.log(response.data);

        setDatos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      {datos.map((producto, index) => (
        <View key={index}>
          <Text>Nombre: {producto.nombre}</Text>
          <Text>Precio: {producto.precio}</Text>
          <Text>Descripción: {producto.descripcion}</Text>
          <Text>Categoría: {producto.categoria}</Text>
        </View>
      ))}
    </View>
  );
};

//estilos


export default App;