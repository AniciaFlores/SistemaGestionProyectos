// backend/server.js
const express = require('express');
const app = express();

// Configurar rutas API
app.get('/api/users', (req, res) => {
  // Lógica para obtener usuarios del backend
  res.json({ users: [] });
});

// Otros middlewares y configuraciones de backend aquí

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor del backend en funcionamiento en el puerto ${PORT}`);
});

