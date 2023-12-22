import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ItemsCard from "../../components/ItemsCard";

import BobDylan from "../../assets/images/bobDylan.png";
import DjMusic from "../../assets/images/djMusic.png";
import Weekend from "../../assets/images/weekend.png";
import Soul from "../../assets/images/soul.png";

import "./Items.scss";


const data = [
	{
		id: 0,
		image: BobDylan,
		title: "Knockin' On Heaven's Door"
	},
	{
		id: 1,
		image: Soul,
		title: "Let's Pause"
	},
	{
		id: 2,
		image: Weekend,
		title: "Blinding lights"
	},
	{
		id: 3,
		image: DjMusic,
		title: "The Thrill Is Gone"
	}
];


const Items = () => {

	// function getWindowSize() {
	// 	const { innerWidth, innerHeight } = window;
	// 	return { innerWidth, innerHeight };
	// }

	// const [windowSize, setWindowSize] = useState(getWindowSize());

	// useEffect(() => {
	// 	function handleWindowResize() {
	// 		setWindowSize(getWindowSize());
	// 	}

	// 	window.addEventListener('resize', handleWindowResize);

	// 	return () => {
	// 		window.removeEventListener('resize', handleWindowResize);
	// 	};
	// }, []);

	// const changeWindowSize = () => {
	// 	if (windowSize.innerWidth < 1200) {
	// 		return 2.4
	// 	}
	// }

	return (
		<div className="Items">
			<Swiper className="container" autoplay={5000} spaceBetween={50} slidesPerView={3.4}>
				{
					data.map((data, index) => (
						<SwiperSlide key={index}>
							<ItemsCard key={data.id} image={data.image} title={data.title} />
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	)
}

export default Items;