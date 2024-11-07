
import React from 'react';

const Card =({image ,title,description}) =>{
    return(
        <div className="card">
            <img src={image} alt={title} className="cardpic"></img>
            <h2 className="cardtitle">{title}</h2>
            <p className="cardDesc">{description}</p>
        </div>
    );
}

export default Card