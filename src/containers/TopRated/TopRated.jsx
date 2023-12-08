import React from 'react'
import ItemsCard from "../../components/ItemsCard/ItemsCard";
import Konsta from "../../assets/images/konsta.png";
import Shokir from "../../assets/images/shokir.png";
import GioPika from "../../assets/images/gioPika.png";
import Dilnoz from "../../assets/images/dilnoz.png";
import MuhammdZiyo from "../../assets/images/MuhammadZiyo.png";
import "./TopRated.scss";
import { Swiper, SwiperSlide } from "swiper/react";


const data = [
	{
		id: 0,
		image: Konsta,
		title: "Konsta - Odamlar nima deydi !?"
	},
	{
		id: 1,
		image: Shokir,
		title: "Shokir - Ertasi yo'q"
	},
	{
		id: 2,
		image: GioPika,
		title: "Gio Pika - Листопадом"
	},
	{
		id: 3,
		image: Dilnoz,
		title: "Dilnoz - Qizil pomada"
	},
	{
		id: 4,
		image: MuhammdZiyo,
		title: "MuhammdZiyo - Labidan"
	}
]


const TopRated = () => {
	return (
		<div className="TopRated">
			<Swiper className="container" spaceBetween={50} slidesPerView={2.6}>
				{
					data.map((item, i) => (
						<SwiperSlide>
							<ItemsCard key={i} image={item.image} title={item.title} />
						</SwiperSlide>

					))
				}
			</Swiper>
		</div>
	)
}

export default TopRated;