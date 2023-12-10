import React from 'react';

import "./ContactSection.scss";

const ContactSection = () => {

	return (
		<div className="ContactSection">
			<h2 className="ContactSection-title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
			<h4 className="ContactSection-text">Type your email down below and be young wild generation</h4>

			<form action="#" onSubmit={(e) => e.preventDefault()} className="ContactSection-contact">
				<input className="ContactSection-input" type="email" name="email" id="email" placeholder="Add your email here" />
				<button className="btnDefault" type="submit">SEND</button>
			</form>
		</div>
	)
}

export default ContactSection;