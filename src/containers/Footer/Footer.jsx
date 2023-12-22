import React from 'react';
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo2.png";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";
import Linkedin from "../../assets/images/linkedin.png";

import "./Footer.scss";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="Footer-inner container">

				<div className="Footer-left">
					<img className="Footer-logo" src={Logo} alt="Footer-logo" />
					<h4 className="Footer-left-text">Find music that suits your taste. The music is from us.</h4>

					<div className="Footer-left-socialMedia">
						<Link to="https://www.facebook.com" target="_blank" className="Footer-left-icon"><img src={Facebook} alt="" /></Link>
						<Link to="https://www.instagram.com" target="_blank" className="Footer-left-icon"><img src={Instagram} alt="" /></Link>
						<Link to="https://twitter.com" target="_blank" className="Footer-left-icon"><img src={Twitter} alt="" /></Link>
						<Link to="https://www.linkedin.com" target="_blank" className="Footer-left-icon"><img src={Linkedin} alt="" /></Link>
					</div>
				</div>

				<div className="Footer-right">
					<ul>
						<li className="Footer-right-linkTitle">Company</li>
						<li><Link className="Footer-right-link" to="/">About</Link></li>
						<li><Link className="Footer-right-link" to="/">Contact us</Link></li>
						<li><Link className="Footer-right-link" to="/">Support</Link></li>
						<li><Link className="Footer-right-link" to="/">Careers</Link></li>
					</ul>

					<ul>
						<li className="Footer-right-linkTitle">Quick Link</li>
						<li><Link className="Footer-right-link" to="/">Share Location</Link></li>
						<li><Link className="Footer-right-link" to="/">Orders Tracking</Link></li>
						<li><Link className="Footer-right-link" to="/">Size Guide</Link></li>
						<li><Link className="Footer-right-link" to="/">FAQs</Link></li>
					</ul>

					<ul>
						<li className="Footer-right-linkTitle">Legal</li>
						<li><Link className="Footer-right-link" to="/">Terms & conditions</Link></li>
						<li><Link className="Footer-right-link" to="/">Privacy Policy</Link></li>
					</ul>
					
				</div>
				
			</div>
				<h4 className="Footer-copyright">Copyright © 2023 - 2024 shbotirov227®. <br></br>All rights reserved</h4>
		</div>
	)
}

export default Footer;