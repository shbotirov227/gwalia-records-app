import React from 'react';
import { Link } from "react-router-dom";

import "./PremiumCard.scss";



const PremiumCard = ({ color, forFree, title, cost, duration, advantage, button, description }) => {

	// const colors = ["rgb(255, 200, 98)", "rgb(255, 210, 215)", "rgb(165, 187, 209)", "rgb(196, 177, 212)"]

	// const [bgColor, setBgColor] = useState()

	// const randomColor = Math.floor(Math.random() * colors).toString(16);

	return (
		<div className="PremiumCard" style={{ borderColor: color }}>
			{
				forFree ? <button className="PremiumCard-forFree" style={{ backgroundColor: color }}>Free For 3 Months</button> : <></>
			}

			<div className="PremiumCard-info">
				<h3 className="PremiumCard-title">{title}</h3>

				<div className="PremiumCard-costs">
					<span className="PremiumCard-cost">{cost}</span>
					<span className="PremiumCard-duration">{duration}</span>
				</div>
			</div>


			<div className="PremiumCard-details">
				<ul className="PremiumCard-advantageList">
					{advantage.map((item, index) => <li key={index} className="PremiumCard-advantage">{item}</li>)}
				</ul>
			</div>

			<Link to="/login" className="PremiumCard-btn" style={{ backgroundColor: color }}>{button}</Link>
			<p className="PremiumCard-description">{description}</p>
		</div>
	)
}

export default PremiumCard;