function InfosArtisans ({artisan}) {
    return (
        <div className="card">
            <h2>{artisan.nom_artisans}</h2>
            <p> Spécialités : {artisan.Specialite?.nom_specialites}</p>
            <p> Ville : {artisan.ville_artisans}</p>
            <p> Note : {artisan.note_artisans}</p>
            <img src="../src/assets/images/favicon-32.png" alt="" />
            <a href={artisan.site_web_artisans} target="_blank">Site web de l'artisan</a>
        </div>
    )
}

export default InfosArtisans;
