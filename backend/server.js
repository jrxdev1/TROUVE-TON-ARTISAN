const app = require('./app');

// Définir le port
const PORT = process.env.PORT || 5000;

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

