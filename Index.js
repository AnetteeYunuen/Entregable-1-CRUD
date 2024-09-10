const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/monoliticos')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB', err));

// Definir el modelo de productos
const productosSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    precio: Number
});
const Producto = mongoose.model('Producto', productosSchema);

// Obtener todos los productos
app.get('/productos', async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
});

// Obtener un productos por ID (campo id)
app.get('/productos/:id', async (req, res) => {
    const productos = await Producto.findOne({ id: +req.params.id });
    producto ? res.json(producto) : res.status(404).send('producto no encontrado');
});

// Crear un nuevo productos
app.post('/productos', async (req, res) => {
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).json(producto);
});

// Actualizar un productos por ID (campo id)
app.put('/productos/:id', async (req, res) => {
    const producto = await Producto.findOneAndUpdate(
        { id: +req.params.id },
        req.body,
        { new: true }
    );
    producto ? res.json(producto) : res.status(404).send('producto no encontrado');
});

// Eliminar un productos por ID (campo id)
app.delete('/productos/:id', async (req, res) => {
    const producto = await Producto.findOneAndDelete({ id: +req.params.id });
    producto ? res.send('producto eliminado') : res.status(404).send('producto no encontrado');
});

// Iniciar el servidor
app.listen(port, () => console.log('Servidor corriendo en http://localhost:${port}'));