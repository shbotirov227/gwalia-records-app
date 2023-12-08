import React from 'react';
import SalesImg from "../../assets/images/saleStarsBg.png";

import "./Sales.scss";

const Sales = () => {
	return (
		<div className="Sales">
			<div className="Sales-inner container">
				<img src={SalesImg} alt="salesImg" />
				
				<div className="Sales-content">
					<h2 className="heroSection-title"><span className="bg-white">PAYDAY </span> <br></br>SALE NOW</h2>
					<p className="Sales-text">Spend minimal $100 get 30% off voucher code for your next purchase</p>
					<h4 className="Sales-text textBold">1 June - 10 June 2021</h4>
					<h4 className="Sales-text">*Terms & Conditions apply</h4>
					<button className="btnDefault">SHOW NOW</button>
				</div>
			</div>
		</div>
	)
}

export default Sales