import React from 'react';
import AppStore from "../../assets/images/appStore.png";
import PlayMarket from "../../assets/images/playMarket.png";
import MobileImg from "../../assets/images/mobileApp.png";
import MobileAppBg from "../../assets/images/mobileAppBg.png";

import "./MobileApp.scss";
import { Link } from "react-router-dom";

const MobileApp = () => {
	return (
		<div className="MobileApp container">
			<div className="MobileApp-left">
				<h2 className="MobileApp-title">DOWNLOAD APP & GET THE VOUCHER!</h2>
				<p className="MobileApp-text">Get 30% off for first transaction using Gwalia Records mobile app for now.</p>
				
				<div className="MobileApp-links">
					<Link target="_blank" to="https://appstore.com"><img src={AppStore} alt="" /></Link>
					<Link target="_blank" to="https://play.google.com"><img src={PlayMarket} alt="" /></Link>
				</div>
			</div>

			<div className="MobileApp-right">
				<img className="MobileApp-right-img" src={MobileImg} alt="" />
			</div>
		</div>
	)
}

export default MobileApp;