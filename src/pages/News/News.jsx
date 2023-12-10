import React from 'react';
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";

import "./News.scss";

const News = () => {
	return (
		<div className="News">
			<Header />
			<h2 className="News-title">News Page</h2>
			<Footer />
		</div>
	)
}

export default News;