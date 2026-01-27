import { Link } from "react-router-dom"

function Cards ({artisan}) {

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{artisan.nom_artisans}</h3>
                <h4 className="card-subtitle"> Spécialités : {artisan.Specialite?.nom_specialites}</h4>
                <p className="card-text"> Ville : {artisan.ville_artisans}</p>
                <p className="card-note"> Note : {artisan.note_artisans}</p>
                <Link to={`/ficheartisans/${artisan.id_artisans}`} className="card-link">Voir la fiche de l'artisan</Link>
            </div>  
        </div>
    )
}

export default Cards