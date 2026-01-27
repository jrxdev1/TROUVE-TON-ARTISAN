function InfosArtisans({ artisan }) {
  return (
    <div className="infos">
      <div>
        <h2>{artisan.nom_artisans}</h2>
        <p> Spécialité : {artisan.Specialite?.nom_specialites}</p>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <p className="row"> Ville : {artisan.ville_artisans}</p>
          </div>
          <div className="col">
            <img
              src="../src/assets/images/favicon-32.png"
              alt=""
              className=""
            />
            <p className=""> Note : {artisan.note_artisans}</p>
            <a href={artisan.site_web_artisans} target="_blank" className="">
              Site web de l'artisan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfosArtisans;
