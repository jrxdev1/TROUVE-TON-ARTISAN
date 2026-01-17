const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Specialite = sequelize.define('Specialite', {
    id_specialites: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true
    },
    nom_specialites: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_categories:{
        type: DataTypes.INTEGER, //Nombre entier
        allowNull: false
    },
},{
    tableName: 'specialites',
    timestamps: false
});

module.exports = Specialite;


