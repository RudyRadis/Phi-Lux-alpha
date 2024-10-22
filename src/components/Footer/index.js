import Image from 'next/image';
import Link from 'next/link';
import './footer.css';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [isAndroid, setIsAndroid] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Détection du type d'appareil
        const userAgent = navigator.userAgent;

        if (/android/i.test(userAgent)) {
            setIsAndroid(true);
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            setIsIOS(true);
        }
    }, []);

    // URLs des stores
    const googlePlayUrl = isAndroid
        ? 'https://play.google.com/store/apps' // URL spécifique de votre application
        : 'https://play.google.com/store';

    const appStoreUrl = isIOS
        ? 'https://apps.apple.com/us/app' // URL spécifique de votre application
        : 'https://www.apple.com/app-store/';


    return (
        <footer className="footer">
            <div className="footer__vrtcl-lns">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="footer__vrtcl-ln"></div>
                ))}
            </div>

            <div className="footer__content">
                <div className="footer__top">
                    <div className="footer__contact-mail">
                        <h3>Contact par mail</h3>
                        <div className="footer__mail-adress">philux@gmail.com</div>
                    </div>

                    <div className="footer__social-networks">
                        <h3>Réseaux sociaux</h3>
                        <div className="list-scl-ntwks">
                            {[
                                { href: "https://www.tiktok.com", src: "/ressources/social-networks/tiktok.svg", alt: "TikTok Icon" },
                                { href: "https://www.instagram.com", src: "/ressources/social-networks/instagram.svg", alt: "Instagram Icon" },
                                { href: "https://www.youtube.com", src: "/ressources/social-networks/youtube.svg", alt: "YouTube Icon" },
                                { href: "https://www.twitter.com", src: "/ressources/social-networks/twitter.svg", alt: "Twitter Icon" },
                                { href: "https://www.facebook.com", src: "/ressources/social-networks/facebook.svg", alt: "Facebook Icon" },
                                { href: "https://www.threads.net", src: "/ressources/social-networks/threads.svg", alt: "Threads Icon" },
                            ].map((social, index) => (
                                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.alt}>
                                    <Image src={social.src} alt={social.alt} width={24} height={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__doawload-app">
                        <h3>Télécharger l'application</h3>
                        <div className="list-store">
                            <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
                                <Image src="/ressources/store/google-playstore-icon.svg" alt="Google Play Store" width={64} height={64} />
                            </a>
                            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                                <Image src="/ressources/store/app-store-icon.svg" alt="App Store" width={64} height={64} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__separator"></div>

                <div className="footer__bottom">
                    <div className="footer__links">
                        <ul>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/legal-notice">Mentions légales</Link></li>
                            <li><Link href="/privacy-policy">Politique de confidentialité</Link></li>
                        </ul>
                    </div>
                    <div className="footer__copyright">
                        © Phil-Lux 2024
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;