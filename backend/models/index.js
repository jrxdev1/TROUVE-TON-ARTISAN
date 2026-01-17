const Categorie =require('./Categorie');
const Specialite =require('./Specialite');
const Artisan =require('./Artisan');

//Connexion de Categorie sans Specialite
Specialite.belongsTo(Categorie, { foreignKey: 'id_categories' });
Categorie.hasMany(Specialite, { foreignKey: 'id_categories' });


//Connexion de Specialite Dans Artisan
Artisan.belongsTo(Specialite, { foreignKey: 'id_specialites' });
Specialite.hasMany(Artisan, { foreignKey: 'id_specialites' });

module.exports = {Categorie, Specialite, Artisan}