import React from 'react';
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";

import "./Signup.scss";

const Signup = () => {
	return (
		<div className="Signup">
			<Header />
			<h2 className="Signup-title">Signup Page</h2>
			<Footer />
		</div>
	)
}

export default Signup;