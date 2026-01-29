function InfosArtisans({ artisan }) {
  return (
    <div className="background-fiche">
      <div className="infos">
        <div className="nom">
          <h2>{artisan.nom_artisans}</h2>
          <h3> Spécialité : {artisan.Specialite?.nom_specialites}</h3>
        </div>
        <div className="container text-center container-infos">
          <div className="row">
            <div className="col ville">
              <p> Ville : {artisan.ville_artisans}</p>
            </div>
            <div className="col image-note">
              <img
                src="../src/assets/images/favicon-32.png"
                alt=""
              />
              <p>{artisan.note_artisans} / 5</p>
              <a href={artisan.site_web_artisans} target="_blank" className="">
                Site web de l'artisan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfosArtisans;
