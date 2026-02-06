const app = require('./app');
const sequelize = require('./config/db');

// Définir le port
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Lancer le serveur + API
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à MySQL réussie');

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erreur de connexion à la base de données :', error);
  }
})();
