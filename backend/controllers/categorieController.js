const { Categorie, Specialite } = require ('../models');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Categorie.findAll({
            attributes :['id_categories', 'nom_categories'],
            include:{
                model: Specialite,
                attributes:['id_specialites', 'nom_specialites']
            }
        });
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "erreur serveur" });
    }
};

module.exports = {getAllCategories};