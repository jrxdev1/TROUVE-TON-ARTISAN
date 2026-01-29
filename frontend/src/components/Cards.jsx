import { Link } from "react-router-dom"

function Cards ({artisan}) {

    return (
        <div className="card">
            <div className="card-body container col">
                <div className="gap row">
                    <h3 className="card-title">{artisan.nom_artisans}</h3>
                    <h4 className="card-subtitle">{artisan.Specialite?.nom_specialites}</h4>
                    <p className="card-text">{artisan.ville_artisans}</p>
                    <p className="card-note">{artisan.note_artisans} / 5</p>
                    <Link to={`/ficheartisans/${artisan.id_artisans}`} className="card-link">Voir la fiche de l'artisan</Link>
                </div>
            </div>
        </div>
    )
}

export default Cards