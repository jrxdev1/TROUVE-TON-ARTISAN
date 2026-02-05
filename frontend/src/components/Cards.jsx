import { Link } from "react-router-dom"
import Etoiles from "./Etoiles"

function Cards ({artisan}) {

    return (
        <Link to={`/ficheartisans/${artisan.id_artisans}`} className="card card-link-wrapper">
            <div className="card-body container col">
                <div className="gap row">
                    <h3 className="card-title">{artisan.nom_artisans}</h3>
                    <h4 className="card-subtitle">{artisan.Specialite?.nom_specialites}</h4>
                    <p className="card-text">{artisan.ville_artisans}</p>
                    <p className="card-note">{artisan.note_artisans} / 5</p>
                    <Etoiles note={artisan.note_artisans}></Etoiles>
                    <Link to={`/ficheartisans/${artisan.id_artisans}`} className="card-link">Voir la fiche de l'artisan</Link>
                </div>
            </div>
        </Link>
    )
}

export default Cards