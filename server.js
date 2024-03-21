const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(cors());

mongoose.connect('mongodb://localhost/mitiendita', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Creación del esquema del producto
const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  descripcion: String,
  categoria: String
});

// Creación del modelo usando el esquema
const Producto = mongoose.model('Producto', productoSchema, 'productos');

// Ruta para obtener todos los productos
app.get('/mitiendita', async (req, res) => {
  try {
    const datos = await Producto.find();
    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});;


app.listen(PORT, () => {
  console.log(`La tiendita se está ejecutando el su esquina en: http://localhost:${PORT}`);
});