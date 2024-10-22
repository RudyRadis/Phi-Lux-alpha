import Link from 'next/link';
import PropTypes from 'prop-types';
import './card.css';
import Btn from '@/components/Btn';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Card = ({
      typeOf,
      titleTag = 'h2',
      title,
      annotatedTitleTag,
      annotatedTitle,
      number,
      numberColor = 'grey',
      descrip,
      colorDescrip = 'green',
      btn,
      isReview
}) => {
      const TitleTag = titleTag
      const AnnotatedTitleTag = annotatedTitleTag


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
            <div className={typeOf === 'long' ? 'card-long' : 'card-short'}>
                  {typeOf === 'short' && numberColor === 'grey' && <div className="card__number card__number--grey">{number}</div>}
                  {typeOf === 'short' && numberColor === 'light' && <div className="card__number card__number--light">{number}</div>}
                  {annotatedTitle && annotatedTitle !== '' && <AnnotatedTitleTag className="card__annotated-title">{annotatedTitle}</AnnotatedTitleTag>}
                  <TitleTag className="card__title">{title}</TitleTag>
                  {typeOf === 'short' && descrip && <div className="card__descrip card__descrip--green">{descrip}</div>}
                  {typeOf === 'long' && descrip && <div className={`card__descrip card__descrip--${colorDescrip}`}>{descrip}</div>}
                  {btn && !annotatedTitle && <div className="card__btn"><Btn {...btn} /></div>}
                  {typeOf === 'short' && <div className="card__separator"></div>}

                  {isReview && <div className="review__dowload-app">
                        <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
                              <Image src="/ressources/store/google-playstore-icon.svg" alt="Google Play Store" width={64} height={64} className="google-play-store" />
                        </a>
                        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                              <Image src="/ressources/store/app-store-icon.svg" alt="App Store" width={64} height={64} className="app-store" />
                        </a>
                  </div>}
            </div>
      );
};


Card.propTypes = {
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
};

export default Card;