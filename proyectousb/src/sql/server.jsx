const express = require('express');
const mysql = require('mysql');

// Configurar conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos',
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

const app = express();

// Ruta de endpoint para el registro
app.post('/registro', (req, res) => {
  // Recuperar los datos enviados desde el frontend
  const { nombre, email, contraseña } = req.body;

  // Realizar la consulta SQL INSERT
  const query = `INSERT INTO usuarios (nombre, email, contraseña) VALUES ('${nombre}', '${email}', '${contraseña}')`;
  connection.query(query, (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error al registrar el usuario');
      return;
    }
    console.log('Usuario registrado exitosamente');
    res.status(200).send('Usuario registrado exitosamente');
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor backend en ejecución en el puerto 3000');
});
