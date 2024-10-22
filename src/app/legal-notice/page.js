'use client';

import { useEffect } from 'react';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import LegalNotice from '@/components/LegalNotice';

export default function LegalNoticePage() {
	useEffect(() => {
		const handleLoad = () => {
			// Récupère la position de scroll sauvegardée
			const savedPosition = localStorage.getItem('scrollPosition');
			if (savedPosition) {
				window.scrollTo(0, parseInt(savedPosition, 10));
			}
		};

		// Sauvegarde la position actuelle avant de quitter la page
		const handleScroll = () => {
			localStorage.setItem('scrollPosition', window.scrollY);
		};

		window.addEventListener('load', handleLoad);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('load', handleLoad);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			<Banner
				isHome={false}
				title='Mentions légales'
				titleTag='h1'
			/>
			<main>
				<LegalNotice />
			</main>
			<Footer />
		</div>
	);
}

// 'Mentions légales'