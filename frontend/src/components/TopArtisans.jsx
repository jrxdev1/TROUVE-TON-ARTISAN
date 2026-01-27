import { useEffect, useState } from 'react';
import api from '../services/api';
import Cards from './Cards';

function TopArtisans() {

    const [artisans, setArtisans] = useState([]); //va stocker les 3 artisans

    //UseEffect appelle l'API pour retrouver les 3 top_artisans à TRUE.
    useEffect(() => {
        api.get(`/artisans/top`) // Appelle le backend
            .then(res => {
                setArtisans(res.data);
            })
            .catch(err => console.error(err));
    }, []); 

    return (
        <section className='cards-section'>
            <h2>Les artisans du mois</h2>
            <div className='container'>
                <div className='cards-artisans row'>
                    {artisans.map(artisan => (
                        <Cards key={artisan.id_artisans} artisan={artisan}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopArtisans;

//.map sert à afficher une card par artisan