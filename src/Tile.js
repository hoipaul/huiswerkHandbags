import React from "react";

function Tile({imageFooter, name, title, textArea}) {
    return (
        <section>
            <img src={imageFooter} alt={name}/>
            <h2 className="textTitle">{title}</h2>
            <p className="textArea">{textArea}</p>
        </section>
    );
}

export default Tile;