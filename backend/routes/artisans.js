const express = require('express');
const router = express.Router();
const { getAllArtisans, getTopArtisans, getArtisansBySpecialites, getArtisansById } = require('../controllers/artisanController')

// Récupérer 
router.get('/', getAllArtisans);

// Récupérer le top 3 des artisans
router.get ('/top', getTopArtisans);

// Récupérer les artisans d'une catégorie
router.get ('/specialite/:id', getArtisansBySpecialites);

//Récupérer les infos d'un artisan
router.get ('/:id', getArtisansById);


module.exports = router;