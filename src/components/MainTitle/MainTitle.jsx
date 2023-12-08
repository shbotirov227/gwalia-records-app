import React from 'react';

import "./MainTitle.scss";

const MainTitle = ({ title }) => {
	return (
		<div className="container">
			<h2 className="MainTitle">{title}</h2>
		</div>
	)
}

export default MainTitle;