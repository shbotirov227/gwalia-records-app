import React from 'react';
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";

import "./Favourite.scss";

const Favourite = () => {
	return (
		<div className="Favourite">
			<Header />
			<h2 className="Favourite-title">Favourite Page</h2>
			<Footer />
		</div>
	)
}

export default Favourite;