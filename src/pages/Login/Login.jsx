import React from 'react';
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";

import "./Login.scss";

const Login = () => {
	return (
		<div className="Login">
			<Header />
			<h2 className="Login-title">Login</h2>
			<Footer />
		</div>
	)
}

export default Login;