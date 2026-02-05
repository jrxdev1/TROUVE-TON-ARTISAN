const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { Artisan } = require('../models/Artisan');

//Créer un POST lors du clique sur le bouton "envoyer"

router.post('/:id', async (req, res) => {
    const { id } = req.params;
    const { nom, prenom, email, objet, message } = req.body;

    try {
        const artisan = await Artisan.findByPk(id);

        if (!artisan) {
        return res.status (400).json ({error : "Artisan introuvable"});
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail ({
        from: email,
        to: artisan.email_artisans,
        subject: `Nouveau message pour ${artisan.nom_artisans}`,
        text: `
        Nom : ${nom}
        Prénom : ${prenom}
        Email : ${email}
        Objet : ${objet}
        Message : ${message}
        `
    });
    
    res.json ({message: "Demande de contact envoyée avec succès"})
    } catch (error) {
        res.status(500).json ({ error: "Erreur d'envoi de la demande de contact"})
    }
});

module.exports = router;