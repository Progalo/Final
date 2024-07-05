const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

const pool = new Pool({
  user: 'usuario',
  host: 'localhost',
  database: 'grupo1',
  password: '12345678',
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Producto');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
});

app.post('/products', async (req, res) => {
  const { nombre, serie, descripcion, caracteristicas, precio, stock, imagen } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Producto (nombre, serie, descripcion, caracteristicas, precio, stock, imagen) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [nombre, serie, descripcion, caracteristicas, precio, stock, imagen]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Corriendo en http://localhost:${port}`);
});
