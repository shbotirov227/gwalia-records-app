import React from 'react';
import PremiumCard from "../../components/PremiumCard/PremiumCard"

import "./Premium.scss";

const Premium = () => {

	const premiumData = [
		{
			id: 0,
			color: "rgb(255, 200, 98)",
			forFree: "Free For 3 Months",
			title: "Debut",
			cost: "FREE",
			duration: "for 3 months",
			advantage: [
				"2 albums per year",
				"1 x priority concert ticket",
				"1 x free item",
				"10% off additional album purchases.",
				"15 hours/month of listening time from our audiobooks subscriber catalogue",

			],
			button: "Try free for 3 months",
			description: "Individual plan only. £10.99/month after. Terms and conditions apply. Open only to users who haven’t already tried Premium. Offer ends 31/12/2023."
		},

		{
			id: 1,
			color: "rgb(255, 210, 215)",
			title: "Upgrade",
			cost: "£14.99",
			duration: "PER MONTH",
			advantage: [
				"3 albums per year",
				"1 x concert tickets",
				"1 x meeting with artists",
				"10% off additional album purchases.",
				"Cancel anytime",
				"15 hours/month of listening time from our audiobooks subscriber catalogue (plan manager only)",

			],
			button: "Get Premium Duo",
			description: "For couples who reside at the same address. Terms apply"
		},

		{
			id: 2,
			color: "rgb(165, 187, 209)",
			title: "Hall of Fame",
			cost: "£17.99",
			duration: "PER MONTH",
			advantage: [
				"4 albums per year",
				"1 x concert tickets",
				"Two products for one payment",
				"20% off album purchases.",
				"2 x meeting with artists",
				"Cancel anytime",
				"15 hours/month of listening time from our audiobooks subscriber catalogue (plan manager only)"
			],
			button: "Get Premium Family",
			description: "For up to 6 family members residing at the same address. Terms apply."
		},

		{
			id: 3,
			color: "rgb(196, 177, 212)",
			forFree: "Free For 1 Month",
			title: "Premium Student",
			cost: "FREE",
			duration: "FOR 1 MONTH",
			advantage: [
				"1 x free item",
				"1 verified Premium account",
				"15 hours/month of listening time from our audiobooks subscriber catalogue (plan manager only)"
			],
			button: "Try free for 1 month",
			description: "Free for 1 month, then £5.99 per month after. Offer available only to students at an accredited higher education institution and if you haven’t tried Premium before. Terms apply."
		}
	];

	return (
		<div className="Premium">
			<div className="Premium-inner">
				<h2 className="Premium-title">Affordable plans for any situation</h2>
				<p className="Premium-text">Choose a Premium plan and listen to ad-free music without limits on your phone, speaker and other devices. Pay in various ways. Cancel anytime.</p>

				<div className="Premium-cards">
					{
						premiumData.map((el, index) => (
							<PremiumCard
								key={index}
								color={el.color}
								forFree={el.forFree}
								title={el.title}
								cost={el.cost}
								duration={el.duration}
								advantage={el.advantage}
								button={el.button}
								description={el.description}
							/>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Premium;