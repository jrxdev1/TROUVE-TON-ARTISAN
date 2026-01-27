function Footer() {
    return (
        <footer className="container-footer row">
            <div className="container-liens col">
                <nav className="nav-liens col-8">
                    <ul className=" container-list">
                        <li>
                            <a href="http://localhost:5173/error" rel="noopener noreferrer">MENTIONS LEGALES</a>
                        </li>
                        <li>
                            <a href="http://localhost:5173/error" rel="noopener noreferrer">DONNEES PERSONNELLES</a>
                        </li>
                        <li>
                            <a href="http://localhost:5173/error" rel="noopener noreferrer">ACCESSIBILITE</a>
                        </li>
                        <li>
                            <a href="http://localhost:5173/error" rel="noopener noreferrer">COOKIES</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container col">
                <address className="adresse col-8">
                    <p>101 cours Charlemagne</p>
                    <p>CS 20033</p>
                    <p>69269 LYON CEDEX 02</p>
                    <p>France</p>
                    <a href="tel:0426734000">+33 (0)4 26 73 40 00</a>
                </address>
            </div>
        </footer>
    );
};

export default Footer;
