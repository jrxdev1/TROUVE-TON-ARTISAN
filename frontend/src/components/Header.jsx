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
        <header className='navbar navbar-expand-lg'>
            <div className='container-fluid d-flex align-items-center header-position'>
                {/* LOGO */}
                <div className='logo-container'>
                    <img src="../src/assets/images/Logo.png" alt="Logo de la region" onClick={() => navigate("/")} className='img-fluid logo'/>
                </div>

                {/* RECHERCHE */}
                <div className='center-navbar flex-grow-1 d-flex justify-content-center'>
                    <form onSubmit={handleSearch} className='search-form d-flex align-items-center'>
                        <input type="text" className='form-control search-input' placeholder='Rechercher un artisan' value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type='submit' className='btn'>
                            <img src="../src/assets/images/loupe.png" alt="Rechercher" />
                        </button>
                    </form>
                </div>

                {/* BOUTON BURGER */}
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* MENU */}
                <div className='collapse navbar-collapse' id='navbarContent'>
                    <ul className='navbar-nav ms-auto'>
                        {categories.map(categorie => (
                            <li key={categorie.id_categories} className='nav-item dropdown'>
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
        </header>
    );
};

export default Header;
