import React from 'react'
import ConcertCard from "../../components/ConcertCard";
import MainTitle from "../../components/MainTitle";
import ConcertImg1 from "../../assets/images/concertImg1.jpg";
import ConcertImg2 from "../../assets/images/concertImg2.jpg";
import ConcertImg3 from "../../assets/images/concertImg3.jpg";
// import ConcertImg4 from "../../assets/images/concertImg4.jpg";

import "./Concert.scss";

const Concert = () => {

	const concertData = [
		{
			id: 0,
			title: "Led Zeppelin, Live Music Meetup",
			date: "3rd 4PM Sat - 4th 1PM Sun May | 235 N. Ashland avenue Chicago, USA",
			author: "Organized by David Greene",
			price: "120.0$",
			img: ConcertImg1,
		},

		{
			id: 1,
			title: "Pink Floyd Live Concert",
			date: "4th 7th October Live | Pompei Amphitheatre, Italy",
			author: "Organized by Bruce Roney",
			price: "130.0$",
			img: ConcertImg2,
		},

		{
			id: 2,
			title: "The New York City Live Music Meetup",
			date: "16,024 Live Music Fans | New York, USA",
			author: "Organized by David Greene",
			price: "220.0$",
			img: ConcertImg3,
		},
	];

	return (
		<div className="Concert">
			<MainTitle title="Concerts" />
			<div className="Concert-items">
				{concertData.map((item, index) => (
					<ConcertCard
						key={index}
						title={item.title}
						date={item.date}
						price={item.price}
						author={item.author}
						image={item.img}
					/>
				))}
			</div>
		</div>
	)
}

export default Concert;