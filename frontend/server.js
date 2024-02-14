// frontend/server.js
const express = require('express');
const path = require('path');
const app = express();

// Servir la aplicación React estática
app.use(express.static(path.join(__dirname, 'build')));

// Configurar una ruta para todas las demás solicitudes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor del frontend en funcionamiento en el puerto ${PORT}`);
});
