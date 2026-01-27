function Contact () {
    return (
        <div>
            <h2>Formulaire de contact avec l'artisan</h2>
            
            <form action="" className="container formulaire">
                <div className="champs">
                    <div className="mb-3">    
                        <label htmlFor="exampleInputNom" className="form-label">Nom</label>
                        <input type="text" className="form-control" placeholder="Nom" required/>
                    </div>
                    <div className="mb-3">    
                        <label htmlFor="exampleInputPrenom" className="form-label">Prénom</label>
                        <input type="text" className="form-control" placeholder="Prénom" required/>
                    </div>
                    <div className="mb-3">    
                        <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder="john.goe@email.com" required/>
                    </div>
                    <div className="mb-3">    
                        <label htmlFor="exampleInputObjet" className="form-label">Objet</label>
                        <input type="text" className="form-control" placeholder="Demande de devis" required/>
                    </div>
                    <div className="mb-3">    
                        <label htmlFor="exampleInputMessage" className="form-label">Message</label>
                        <textarea type="text" className="form-control" placeholder="..." required/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        </div>
    )
}

export default Contact;