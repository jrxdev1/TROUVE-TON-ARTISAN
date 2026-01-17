const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Categorie = sequelize.define('Categorie', {
    id_categories: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_categories: {
        type: DataTypes.STRING,
        allowNull: false, //par défaut true
        unique: true
    }
}, {
    tableName: 'categories',
    timestamps: false
});

module.exports = Categorie;
