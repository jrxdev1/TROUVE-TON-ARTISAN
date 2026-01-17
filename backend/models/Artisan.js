const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Artisan = sequelize.define ('Artisan', {
    id_artisans: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_artisans: {
        type: DataTypes.STRING,
        allowNull: false
    },
    note_artisans: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    ville_artisans: {
        type: DataTypes.STRING,
        allowNull: false
    },
    a_propos_artisans: {
        type: DataTypes.TEXT
    },
    email_artisans: {
        type: DataTypes.STRING,
        allowNull: false
    },
    site_web_artisans: {
        type: DataTypes.STRING
    },
    top_artisans: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    id_specialites: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    tableName: 'artisans',
    timestamps: false
});

module.exports = Artisan;