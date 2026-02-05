function Etoiles ({note}) {

    const fullEtoiles = Math.floor(note);
    const emptyEtoiles = 5 - fullEtoiles;
    
    return (
        <div className="etoiles">
            {"★".repeat(fullEtoiles)}
            {"☆".repeat(emptyEtoiles)}
        </div>
    );
}

export default Etoiles;