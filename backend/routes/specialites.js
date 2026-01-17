const express = require('express');
const router = express.Router();
const { getAllSpecialites, getAllSpecialitesByCategorie } = require('../controllers/specialiteController')

// Récupérer toutes les catégories avec leurs spécialités (paramétré dans categorieController.js)
router.get('/', getAllSpecialites);
router.get('/categorie/:id', getAllSpecialitesByCategorie)

module.exports = router;