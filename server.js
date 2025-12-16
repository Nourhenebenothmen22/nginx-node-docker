const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir le dossier images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Servir le fichier index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
