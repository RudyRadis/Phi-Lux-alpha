'use client';

import { useEffect } from 'react';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export default function PrivacyPolicyPage() {
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
				title='Politique de confidentialité'
				titleTag='h1'
			/>
			<main>
				<PrivacyPolicy />
			</main>
			<Footer />
		</div>
	);
}