import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import Cards from '../components/Cards';

function ListeArtisans () {

    const { id } = useParams();
    const [artisans, setArtisans] = useState([]);

    useEffect(() => {
        document.title = `Spécialités d'artisans | Trouve ton artisan`;
    }, []);

    useEffect(() => {
        api.get(`/artisans/specialite/${id}`)
            .then(res => {
                setArtisans(res.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    //Afficher en h1 le nom de la spécialité
    return (
        <section className='artisans'>
        <h1>{artisans.length > 0
        ? `Artisans – ${artisans[0].Specialite?.nom_specialites}`
        : 'Artisans de la spécialité'}</h1>
        {artisans.length === 0 ? (
            <p>Aucun artisan trouvé.</p>
        ) : (
            <div className='container top-container'>
                <div className='specialite row'>
                    {artisans.map(artisan => (
                        <Cards key={artisan.id_artisans} artisan={artisan} className='col'/>
                    ))}
                </div>
            </div>
            )}
        </section>
    );
};

export default ListeArtisans

//.map sert à afficher une card par artisan