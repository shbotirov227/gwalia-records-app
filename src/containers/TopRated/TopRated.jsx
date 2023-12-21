import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import ItemsCard from "../../components/ItemsCard";
import PinkFloyd from "../../assets/images/pinkFloyd.webp";
import LedZeppelin from "../../assets/images/ledZeppelin.webp";
import BBKing from "../../assets/images/BBKing.webp";
import Elaquent from "../../assets/images/elaquent.webp";
import LeoBridges from "../../assets/images/leonBridges.webp";

import "./TopRated.scss";


const data = [
	{
		id: 0,
		image: PinkFloyd,
		title: "Pink Floyd - Division Bell"
	},
	{
		id: 1,
		image: LedZeppelin,
		title: "Led Zeppelin - IV: Remastered Super Deluxe Edition"
	},
	{
		id: 2,
		image: BBKing,
		title: "B.B King - Live In Cook County Jail"
	},
	{
		id: 3,
		image: Elaquent,
		title: "Elaquent - Blessing In Disguise"
	},
	{
		id: 4,
		image: LeoBridges,
		title: "Khruangbin & Leon Bridge - Texas Sun EP"
	}
]


const TopRated = () => {
	return (
		<div className="TopRated">
			<Swiper className="container" spaceBetween={50} slidesPerView={3.6}>
				{
					data.map((item, i) => (
						<SwiperSlide key={i}>
							<ItemsCard key={item.id} image={item.image} title={item.title} />
						</SwiperSlide>

					))
				}
			</Swiper>
		</div>
	)
}

export default TopRated;