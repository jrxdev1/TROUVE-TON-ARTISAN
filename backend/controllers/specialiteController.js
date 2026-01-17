const { Categorie, Specialite } = require ('../models');

const getAllSpecialites = async (req, res) => {
    try {
        const specialites = await Specialite.findAll({
            attributes :['id_specialites', 'nom_specialites'],
            include:{
                model: Categorie,
                attributes:['id_categories', 'nom_categories']
            }
        });
        res.json(specialites);
    } catch (error) {
        res.status(500).json({ message: "erreur serveur" });
    }
};

const getAllSpecialitesByCategorie = async (req, res) => {
    try {
        const {id} = req.params;

        const specialites = await Specialite.findAll({
            where: { id_categorie: id }
        });
        res.json(specialites);
    } catch (error) {
        res.status(500).json({ message: "erreur serveur" });
    }
};

module.exports = { getAllSpecialites, getAllSpecialitesByCategorie };