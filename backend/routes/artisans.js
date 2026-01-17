const express = require('express');
const router = express.Router();
const { getAllArtisans, getTopArtisans, getArtisansBySpecialites } = require('../controllers/artisanController')

// Récupérer 
router.get('/', getAllArtisans);

// Récupérer le top 3 des artisans
router.get ('/top', getTopArtisans);

// Récupérer les artisans d'une catégorie
router.get ('/specialite/:id', getArtisansBySpecialites)

module.exports = router;