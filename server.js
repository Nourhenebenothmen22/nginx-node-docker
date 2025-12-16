const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Récupérer le nom de l'app depuis Docker Compose
const appName = process.env.APP_NAME || 'Node App';

// Servir le dossier images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Servir le fichier index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ajouter un endpoint pour identifier l'app
app.get('/info', (req, res) => {
  res.json({ app: appName, message: "Hello from Node.js DevOps app!" });
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`${appName} lancé sur http://localhost:${port}`);
});
