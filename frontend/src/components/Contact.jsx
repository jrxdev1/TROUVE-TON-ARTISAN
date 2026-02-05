import { useState } from "react";
import axios from "axios";

function Contact ({ artisan }) {

    const [formData, setFormData] = useState ({
        nom: "",
        prenom: "",
        email: "",
        objet: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:5000/contact/${artisan.id_artisans}`,
                formData
            );

            alert("Demande de contact envoyée");
        } catch (error) {
            console.error(error);
            alert("Erreur lors de l'envoi du message");
        }
    };

    return (
        <div className="contact">
            <h2>Formulaire de contact</h2>
            
            <form action="" onSubmit={handleSubmit} className="container formulaire">
                <div className="champs">
                    <div className="mb-3">    
                        <label htmlFor="exampleInputNom" className="form-label">Nom</label>
                        <input type="text" name="nom" className="form-control" placeholder="Nom" required minLength={2} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">    
                        <label htmlFor="exampleInputPrenom" className="form-label">Prénom</label>
                        <input type="text" name="prenom" className="form-control" placeholder="Prénom" required minLength={2} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" placeholder="john.goe@email.com" required onChange={handleChange}/>
                    </div>
                    <div className="mb-3">    
                        <label htmlFor="exampleInputObjet" className="form-label">Objet</label>
                        <input type="text" name="objet" className="form-control" placeholder="Demande de devis" required minLength={4} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">    
                        <label htmlFor="exampleInputMessage" className="form-label">Message</label>
                        <textarea type="text" name="message" className="form-control" placeholder="..." required minLength={10} onChange={handleChange}/>
                    </div>
                </div>
                <button type="submit" className="btn">Envoyer</button>
            </form>
        </div>
    )
}

export default Contact;