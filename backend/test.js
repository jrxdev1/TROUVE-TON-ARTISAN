const sequelize = require('./config/db');
const Artisan = require('./models/Artisan');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion OK');

        const artisans = await Artisan.findAll({ limit: 5 });
        console.log(artisans.map(a => a.nom_artisans));
        process.exit();
    } catch (err) {
        console.error(err);
    }
})();
