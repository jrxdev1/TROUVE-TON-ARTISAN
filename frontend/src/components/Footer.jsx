function Footer() {
    return (
        <footer className="container footer">
            <div className="row">
                <div className="liens col">
                    <nav className="nav-liens">
                        <ul className=" lien-list">
                            <li>
                                <a href="http://localhost:5173/legalnotice" rel="noopener noreferrer">Mentions légales</a>
                            </li>
                            <li>
                                <a href="http://localhost:5173/error" rel="noopener noreferrer">Données personnelles</a>
                            </li>
                            <li>
                                <a href="http://localhost:5173/error" rel="noopener noreferrer">Accessibilité</a>
                            </li>
                            <li>
                                <a href="http://localhost:5173/error" rel="noopener noreferrer">Cookies</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col contact-adresse">
                    <address className="adresse">
                        <p>101 cours Charlemagne</p>
                        <p>CS 20033</p>
                        <p>69269 LYON CEDEX 02</p>
                        <p>France</p>
                        <a href="tel:0426734000">+33 (0)4 26 73 40 00</a>
                    </address>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
