import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import InfosArtisans from '../components/InfosArtisans';
import APropos from '../components/APropos';
import Contact from '../components/Contact';

function FicheArtisans () {

    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);

    useEffect(() => {
        if (artisan) {
            document.title = `Artisan ${artisan.nom_artisans} | Trouve ton artisan`;
        }
    }, [artisan]);


    useEffect(() => {
        api.get(`/artisans/${id}`) //React renvoie http://localhost:5000/artisans/2 par exemple
        //Express reçoit /artisans/2 et fonctionne grace au backend : router.get ('/:id', getArtisansById) dans routes/artians.js
        //Lien avec la BDD avec Sequelise : controllers/artisanController.js : const {id} = req.params; + const artisansbyid = await Artisan.findOne( { where: { id_artisans: id }.
        //Traduction SQL : SELECT * FROM artisans WHERE id_artisans = 2;
            .then(res => {
                setArtisan(res.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!artisan) {
        return <p>Chargement de la page</p> //Pour sécurité = abs page blanche pendant chargement
    }

    return (
            <div className='fiche-artisan'>
                <InfosArtisans artisan={artisan}></InfosArtisans>
                <APropos texte={artisan.a_propos_artisans}></APropos>
                <Contact artisan={artisan}></Contact>
            </div>
    );
};


export default FicheArtisans;

