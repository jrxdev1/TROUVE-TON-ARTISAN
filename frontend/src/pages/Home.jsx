import TopArtisans from "../components/TopArtisans";

function Home () {
    return (
        <section>
            <div className="background"></div>
                <div className="tuto-div">
                    <h2>Comment trouver mon artisan ?</h2>
                    <p>1. Choisir la catégorie d'artisanat dans le menu</p>
                    <p>2. Choisir un artisan</p>
                    <p>3. Le contacter via le formulaire de contact</p>
                    <p>4. Une réponse sera apportée en 48 heures</p>
                </div>
            <div className="color-artisans">
                <TopArtisans></TopArtisans>
            </div>
        </section>
    );
};

export default Home;