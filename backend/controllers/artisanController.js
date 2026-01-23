const { Categorie, Specialite, Artisan } = require ('../models');
const { Op } = require('sequelize');

// Récupérer l'artisan recherché + en fonction de sa spécialité ou sa catégorie
const getAllArtisans = async (req, res) => {
    try {
        const { search } = req.query;

        const where = search 
        ? { nom_artisans: { [Op.like]: `%${search}` } }
        : {};

        const artisans = await Artisan.findAll({
            where,
            include: {
                model: Specialite,
                include: {
                    model: Categorie
                }
            }
        });
        res.json(artisans);
    } catch (error) {
        res.status(500).json({ message: "erreur serveur" });
    }
};

// Récupérer le top 3 des artisans (prendre le top_artisans à True) et les classer par note décroissante
const getTopArtisans = async (req, res) => {
    try {
        const topartisans = await Artisan.findAll({
            where: { top_artisans: true},
            attributes: [
                'id_artisans',
                'nom_artisans',
                'note_artisans',
                'ville_artisans',
            ],
            order: [['note_artisans', 'DESC']],
            limit: 3,
            include: {
                model: Specialite
            }
        });
        res.json(topartisans);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erreur serveur du top" });
    }
};

//Récupérer tous les artisans d'une même spécialité
const getArtisansBySpecialites = async (req, res) => {
    try {
        const {id} = req.params;

        const artisansbyspe = await Artisan.findAll({
            where: { id_specialites: id},
            attributes: [
                'id_artisans',
                'nom_artisans',
                'note_artisans',
                'ville_artisans',
                'a_propos_artisans',
                'site_web_artisans',
                'top_artisans'
            ],
            include:{
                model: Specialite,
                attributes:['id_specialites', 'nom_specialites']
            }
        });
        res.json(artisansbyspe);
    } catch (error) {
        res.status(500).json({ message: "erreur serveur" });
    }
};

const getArtisansById = async (req, res) => {
    try {
        const {id} = req.params;

        const artisansbyid = await Artisan.findOne( {
            where: { id_artisans: id }, // je décide ici que id correspond à id_artisans de la BDD
            include:{
                model: Specialite,
            }
        });

        if (!artisansbyid) {
            return res.status(404).json({message: "Artisan non trouvé"})
        };
        
        res.json(artisansbyid);
    } catch (error) {
        res.status(500).json({ message: "erreur serveur" });
    }
};


module.exports = {getAllArtisans, getTopArtisans, getArtisansBySpecialites, getArtisansById};