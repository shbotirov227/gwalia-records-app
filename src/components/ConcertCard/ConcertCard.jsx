import React from 'react';

import "./ConcertCard.scss";



const ConcertCard = ({ title, author, date, price, description, image }) => {
    
    return (
        <div className="ConcertCard">
                
                <div className="ConcertCard-items">
                    <h2 className="ConcertCard-title">{title}</h2>
                    <span className="ConcertCard-date">{date}</span>
                    
                    <div className="ConcertCard-cost">
                        <h4 className="ConcertCard-author">{author}</h4>
                        <span className="ConcertCard-price">{price}</span>
                    </div>
                </div>

                <img className="ConcertCard-img" src={image} alt="" width="250" height="150" />
        </div>
    );
};

export default ConcertCard;
