import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import Cards from '../components/Cards';

function ListeArtisans () {

    const { id } = useParams();
    const [artisans, setArtisans] = useState([]);

    useEffect(() => {
        api.get(`/artisans/specialite/${id}`)
            .then(res => {
                setArtisans(res.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    return (
        <section>
        <h1>Artisans de la spécialité</h1>
        {artisans.length === 0 ? (
            <p>Aucun artisan trouvé.</p>
        ) : (
            <div className="cards-container">
                {artisans.map(artisan => (
                    <Cards key={artisan.id_artisans} artisan={artisan} />
                ))}
                </div>
            )}
        </section>
    );
};

export default ListeArtisans

//.map sert à afficher une card par artisan