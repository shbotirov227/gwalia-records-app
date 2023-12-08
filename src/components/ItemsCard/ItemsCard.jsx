import React from 'react';

import './ItemsCard.scss';
import { ArrowIcon } from "../../assets/icons";

const ItemsCard = ({ image, title }) => {
	return (
		<div className="ItemsCard">
			<img className="ItemsCard-img" src={image} alt="" />
			<h2 className="ItemsCard-title">{title}</h2>
			
			<div className="ItemsCard-explore">
				<h4 className="ItemsCard-btn">Explore Now!</h4>
				<ArrowIcon />
			</div>
		</div>
	)
}

export default ItemsCard;