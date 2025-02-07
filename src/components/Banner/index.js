'use client';

import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import PropTypes from 'prop-types';
import './banner.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

const Banner = ({
	isHome,
	titleTag,
	title,
	annotatedTitleTag,
	annotatedTitle,
	descrip
}) => {

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (!document.querySelector('.home-banner.home-banner--short')) {
			gsap.from(".home-banner__card .card-long .card__title",
				{
					duration: 0.5,
					x: -500,
					opacity: 0,
					delay: 0,
					immediateRender: false
				}
			);
			gsap.from(".home-banner__card .card-long .card__descrip",
				{
					duration: 0.5,
					x: -500,
					opacity: 0,
					delay: 0.15,
					immediateRender: false
				}
			);
			gsap.from(".home-banner__card .card-long .card__btn",
				{
					duration: 0.5,
					x: -500,
					opacity: 0,
					delay: 0.30,
					immediateRender: false
				}
			);
		} else {
			if (document.querySelector('.home-banner__card .card-long .card__annotated-title')) {
				gsap.from(".home-banner__card .card-long .card__annotated-title",
					{
						duration: 0.5,
						x: -500,
						opacity: 0,
						delay: 0,
						immediateRender: false
					}
				);
			}
			gsap.from(".home-banner__card .card-long .card__title",
				{
					duration: 0.5,
					x: -500,
					opacity: 0,
					delay: 0.15,
					immediateRender: false
				}
			);
		}


		gsap.from(".home-banner__picture-svg", {
			scrollTrigger: {
				trigger: ".home-banner__picture-svg",
				start: "top 100%",
				toggleActions: "play none none none",
			},
			duration: 0.5,
			opacity: 0,
			left: '+=500',
			ease: "power1.out",
			delay: 0,
			immediateRender: false,
		});

		gsap.from(".home-banner__picture-main", {
			scrollTrigger: {
				trigger: ".home-banner__picture-main",
				start: "top 100%",
				toggleActions: "play none none none",
			},
			duration: 0.5,
			delay: 0.15,
			x: 500,
			opacity: 0,
			ease: "power1.out",
			immediateRender: false,
		});
	}, []);

	return (
		<header className={`home-banner ${!isHome ? 'home-banner--short' : ''}`}>
			<div className="home-banner__circle--one"></div>
			<div className="home-banner__circle--two"></div>
			<div className="home-banner__circle--three"></div>

			<div className={`home-banner__logo ${!isHome ? 'home-banner__logo--short' : ''}`}>
				<img src="/ressources/logo/logo-philux-green.svg" alt="Logo Phi-Lux" />
			</div>

			<div className="home-banner__vrtcl-lns">
				{[...Array(10)].map((_, index) => (
					<div key={index} className="home-banner__vrtcl-ln"></div>
				))}
			</div>

			<Navbar />

			<div className={`home-banner__content ${!isHome ? 'home-banner__content--short' : ''}`}>
				<div className={`home-banner__card ${!isHome ? 'home-banner__card--short' : ''}`}>
					<Card
						typeOf="long"
						titleTag={titleTag}
						title={title}
						annotatedTitleTag={annotatedTitleTag}
						annotatedTitle={annotatedTitle}
						descrip={descrip}
						colorDescrip='white'
						btn={{
							link: '/',
							label: 'Télécharger l\'application',
							iconPosition: 'left',
							iconClass: 'download',
							buttonClass: 'btn--yellow'
						}}
					/>

				</div>

				<div className={`home-banner__picture ${!isHome ? 'home-banner__picture--short' : ''}`}>
					<img src="/ressources/home/picture-home-banner.png" alt="" className="home-banner__picture-main" />
					<img src="/ressources/home/items-home-banner.svg" alt="" className="home-banner__picture-svg rotate-animation" />
				</div>
			</div>
		</header>
	);
};

Banner.propTypes = {
	isHome: PropTypes.bool.isRequired,
	card: PropTypes.shape({
		typeOf: PropTypes.oneOf(['long', 'short']).isRequired,
		titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
		title: PropTypes.string.isRequired,
		annotatedTitle: PropTypes.string,
		annotatedTitleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
		number: PropTypes.string,
		numberColor: PropTypes.string,
		descrip: PropTypes.string,
		colorDescrip: PropTypes.string,
		btn: PropTypes.shape({
			link: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			iconPosition: PropTypes.oneOf(['left', 'right']),
			iconClass: PropTypes.string,
			buttonClass: PropTypes.string,
		}),
		isReview: PropTypes.bool,
	}),
};

export default Banner;