import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const [openCategorie, setOpenCategorie] = useState(null);

    const navigate = useNavigate();
    
    const toggleCategorie = (id) => {
        setOpenCategorie(openCategorie === id ? null : id);
    };

    useEffect(() => {
        api.get('/categories')
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => console.error(err));
            }, []);


    const handleSearch = (e) => {
        e.preventDefault();

        api.get(`/artisans?search=${search}`)
            .then (res => {
                if (res.data.length === 1) {
                    navigate(`/ficheartisans/${res.data[0].id_artisans}`);
                } else {
                    navigate(`/recherche?search=${search}`);
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <header>
            <div>
            <img src="../src/assets/images/Logo.png" alt="" onClick={() => navigate("/")}/>
            </div>
            
            <div>
                <form onSubmit={handleSearch}>
                    <input type="text" name="" id="" placeholder='Rechercher un artisan' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button type='submit'>Rechercher</button>
                </form>
            </div>

            <div>
                <nav>
                    {categories.map(categorie => (
                        <div key={categorie.id_categorie} className='menu-categories'>
                            <span className='categories-title' onClick={()=> toggleCategorie(categorie.id_categories)}>{categorie.nom_categories}</span>
                            {openCategorie === categorie.id_categories && (
                            <div className='dropdown'>
                                {categorie.Specialites.map(spe => (
                                    <Link key={spe.id_specialites} to={`/specialite/${spe.id_specialites}`}>
                                    {spe.nom_specialites}   
                                    </Link>
                                ))}
                            </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
