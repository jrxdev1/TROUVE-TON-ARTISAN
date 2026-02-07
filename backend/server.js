const app = require('./app');
const sequelize = require('./config/db');

// Définir le port
const PORT = process.env.PORT || 5000;

const dotenv = require("dotenv");

// Choisir le fichier en fonction de l'environnement
if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: ".env.production" });
} else {
    dotenv.config({ path: ".env" });
}


// Lancer le serveur + API
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à MySQL réussie');

    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erreur de connexion à la base de données :', error);
  }
})();



