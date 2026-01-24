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
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className='container-fluid'>
                <img src="../src/assets/images/Logo.png" alt="" onClick={() => navigate("/")} className='col-sm-2'/>
                
                <form onSubmit={handleSearch} className='d-flex ms-3'>
                    <input type="text" className='form-control me-2' placeholder='Rechercher un artisan' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button type='submit' className='btn btn-outline-success'>Rechercher</button>
                </form>    

                <div className='collapse navbar-collapse'>
                    <ul className='nav-item dropdown ms-auto'>
                        {categories.map(categorie => (
                            <li key={categorie.id_categorie} className='nac-item dropdown'>
                                <span className='nav-link dropdown-toggle' onClick={()=> toggleCategorie(categorie.id_categories)}>{categorie.nom_categories}</span>
                                {openCategorie === categorie.id_categories && (
                                <ul className='dropdown-menu show'>
                                    {categorie.Specialites.map(spe => (
                                        <li key={spe.id_specialites}>
                                        <Link to={`/specialite/${spe.id_specialites}`} className='dropdown-item'>
                                        {spe.nom_specialites}   
                                        </Link>
                                        </li>
                                    ))}
                                </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
