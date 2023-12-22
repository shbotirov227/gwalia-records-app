import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import BurgerBtn from "../../assets/images/burger.png";
import CloseBtn from "../../assets/images/exit.png";

import "./Header.scss";

const Header = () => {

	const [state, setState] = useState(false);
	// const [top, setTop] = useState(true);

	// useEffect(() => {
	// 	const scrollHandler = () => {
	// 		window.scrollY > 10 ? setTop(false) : setTop(true)
	// 	};
	// 	window.addEventListener('scroll', scrollHandler);
	// 	return () => window.removeEventListener('scroll', scrollHandler);
	// }, [top]);


	return (
		<div className="Header">
			<div className="Header-inner container">
				<Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
				<div className="Header-links">
					<Link className="Header-links-link" to="/">HOME</Link>
					<Link className="Header-links-link" to="/album">ALBUMS</Link>
					<Link className="Header-links-link" to="/news">NEWS</Link>
					<Link className="Header-links-link" to="/favourite">FAVOURITE</Link>
					<Link className="Header-links-link" to="/singers">SINGERS</Link>

					<Link className="btnDefault" to="/signup">SIGN UP</Link>
				</div>
			</div>
			<img onClick={() => setState(true)} className="burgerBtn" src={BurgerBtn} alt="" />
			<div className={`overlay ${state === true ? "active" : ""}`}>
				<div className="overlay-links">
					<img onClick={() => setState(false)} className="closeBtn" src={CloseBtn} alt="closeBtn" />
					<Link className="Header-links-link" to="/">HOME</Link>
					<Link className="Header-links-link" to="/album">ALBUMS</Link>
					<Link className="Header-links-link" to="/news">NEWS</Link>
					<Link className="Header-links-link" to="/favourite">FAVOURITE</Link>
					<Link className="Header-links-link" to="/singers">SINGERS</Link>

					<Link className="btnDefault" to="/signup">SIGN UP</Link>
				</div>
			</div>
		</div>
	)
}

export default Header;