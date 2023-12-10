import React from 'react';
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";

import "./Singers.scss";

const Singers = () => {
	return (
		<div className="Singers">
			<Header />
			<h2 className="Singers-title">Singers Page</h2>
			<Footer />
		</div>
	)
}

export default Singers;