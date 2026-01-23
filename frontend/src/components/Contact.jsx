function Contact () {
    return (
        <div>
            <h2>Formulaire de contact avec l'artisan</h2>
            
            <form action="">
                <input type="text" placeholder="Nom Prénom" required/>
                <input type="text" placeholder="Mail" required/>
                <input type="text" placeholder="Objet" required/>
                <input type="text" placeholder="Votre message" required/>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default Contact;