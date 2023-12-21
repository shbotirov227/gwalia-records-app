import React from 'react';
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";

import "./Albums.scss";

const Albums = () => {
	return (
		<div className="Albums">
			<Header />
			<h2 className="Albums-title">Albums Page</h2>
			<Footer />
		</div>
	)
}

export default Albums;