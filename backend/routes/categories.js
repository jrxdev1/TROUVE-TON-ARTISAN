const express = require('express');
const router = express.Router();
const { getAllCategories } = require('../controllers/categorieController')

// Récupérer toutes les catégories avec leurs spécialités (paramétré dans categorieController.js)
router.get('/', getAllCategories);

module.exports = router;