import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from "../../containers/Header/Header";
import Items from "../../containers/Items/Items";
import Sales from "../../containers/Sales/Sales";
import MainTitle from "../../components/MainTitle/MainTitle";

import { HeroIcon } from "../../assets/icons";
import HeroImg from "../../assets/images/heroImg.png";
import Yamaha from "../../assets/images/yamaha.svg";
import DW from "../../assets/images/dw.svg";
import Gibson from "../../assets/images/gibson.svg";
import Ludwig from "../../assets/images/ludwig.svg";
import Marshall from "../../assets/images/marshall.svg";
import Tama from "../../assets/images/tama.svg";
import Pearl from "../../assets/images/pearl.svg";
import JBL from "../../assets/images/jbl.svg";

import 'swiper/css';

import "./Home.scss";
import TopRated from "../../containers/TopRated/TopRated";


const data = [
	Yamaha,
	DW,
	Gibson,
	Ludwig,
	Marshall,
	Tama,
	Pearl,
	JBL,
]

const Home = () => {
	return (
		<div className="Home">
			<Header />

			<div className="heroSection container">
				<div className="heroSection-left">
					<h2 className="heroSection-title"><span className="bg-white">Where </span>music <span className="bg-yellow">makes a </span> difference</h2>
					<p className="heroSection-text">Find Your Perfect Sound</p>

					<div className="heroSection-btnSection">
						<HeroIcon />
						<button className="btnDefault">Shop Now</button>
					</div>
				</div>

				<img src={HeroImg} alt="" />
			</div>

			<div className="partners">
				<div className="partners-inner container">

					<Swiper spaceBetween={50} slidesPerView={5}>
						{
							data.map((data, index) => (
								<SwiperSlide key={index}>
									<img className="partners-img" key={index} src={data} alt="" />
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
			</div>



			<MainTitle title="NEW HITS" />
			<Items />

			<Sales />

			<MainTitle title="Young’s Favourite" />
			<TopRated />

		</div>
	)
}

export default Home;