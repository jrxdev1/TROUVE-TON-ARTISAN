import { Link } from "react-router-dom"

function Cards ({artisan}) {

    return (
        <div className="card">
            <h2>{artisan.nom_artisans}</h2>
            <p> Spécialités : {artisan.Specialite?.nom_specialites}</p>
            <p> Ville : {artisan.ville_artisans}</p>
            <p> Note : {artisan.note_artisans}</p>

            <Link to={`/ficheartisans/${artisan.id_artisans}`}>Voir la fiche de l'artisan</Link>
        </div>
    )
}

export default Cards