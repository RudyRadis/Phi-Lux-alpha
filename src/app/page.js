'use client';

import { useEffect } from 'react';
import '../components/Btn/btn.css';
import Banner from '@/components/Banner';
import Functionalities from '@/components/Functionalities';
import Review from '@/components/Review';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
	useEffect(() => {
		const handleLoad = () => {
			// Récupère la position de scroll sauvegardée
			const savedPosition = localStorage.getItem('scrollPosition');
			if (savedPosition) {
				window.scrollTo(0, parseInt(savedPosition, 10));
			}
		};

		// Sauvegarde la position actuelle avant de quitter la page
		// const handleScroll = () => {
		// 	localStorage.setItem('scrollPosition', window.scrollY);
		// };

		window.addEventListener('load', handleLoad);
		// window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('load', handleLoad);
			// window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// useEffect(() => {
	// 	const handleLoad = () => {
	// 	    // Vérifie si la page vient d'être ouverte (nouvelle session)
	// 	    const isNewSession = sessionStorage.getItem('newSession') === null;
	  
	// 	    if (isNewSession) {
	// 		  // Réinitialise la position de scroll
	// 		  window.scrollTo(0, 0);
	// 		  sessionStorage.setItem('newSession', 'false');
	// 	    } else {
	// 		  // Récupère la position sauvegardée si ce n'est pas une nouvelle session
	// 		  const savedPosition = localStorage.getItem('scrollPosition');
	// 		  if (savedPosition) {
	// 			window.scrollTo(0, parseInt(savedPosition, 10));
	// 		  }
	// 	    }
	// 	};
	  
	// 	const handleScroll = () => {
	// 	    localStorage.setItem('scrollPosition', window.scrollY);
	// 	};
	  
	// 	window.addEventListener('load', handleLoad);
	// 	window.addEventListener('scroll', handleScroll);
	  
	// 	return () => {
	// 	    window.removeEventListener('load', handleLoad);
	// 	    window.removeEventListener('scroll', handleScroll);
	// 	};
	//   }, []);

	return (
		<div>
			<Banner
				isHome={true}
				title='La meilleure application pour apprendre les maths'
				titleTag='h1'
				descrip='Cours en ligne et exercices interactifs. Programme couvrant les classes du collège.'
			/>
			<main>
				<Functionalities typeOf='child' />
				<Functionalities typeOf='parents' />
				<Review />
				<Functionalities typeOf='methodology' />
				<Pricing />
			</main>
			<Footer />
		</div>
	);
}
