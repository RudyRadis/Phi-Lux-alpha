'use client'

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRight, faArrowLeft, faPaperPlane, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './btn.css';
import { useEffect, useState } from 'react';

const Btn = ({
      link,
      label,
      iconPosition = 'left',
      iconClass,
      buttonClass,
      isSubmitButton = false
}) => {
      const [dynamicLink, setDynamicLink] = useState(link);
      const [isWebView, setIsWebView] = useState(false);
      let icon = null;

      if (iconClass) {
            switch (iconClass) {
                  case 'download':
                        icon = faDownload;
                        break;
                  case 'arrow-right':
                        icon = faArrowRight;
                        break;
                  case 'arrow-left':
                        icon = faArrowLeft;
                        break;
                  case 'thumb':
                        icon = faThumbsUp;
                        break;
                  case 'send':
                        icon = faPaperPlane;
                        break;
                  default:
                        icon = null;
                        break;
            }
      }

      useEffect(() => {
            // Détection du type d'appareil et du webview
            const userAgent = navigator.userAgent.toLowerCase();
            const isWebViewAgent = /instagram|fbav|facebook|line|micromessenger|twitter|whatsapp|snapchat|tiktok|pinterest|threads/.test(userAgent);
            setIsWebView(isWebViewAgent);

            if (iconClass === 'download') {
                  if (/iphone|ipad|ipod/.test(userAgent)) {
                        // Appareil iOS (iPhone, iPad, iPod)
                        setDynamicLink('https://apps.apple.com/us/app');
                  } else if (/macintosh/.test(userAgent)) {
                        // MacOS
                        setDynamicLink('https://www.apple.com/app-store/');
                  } else if (/android/.test(userAgent)) {
                        // Appareil Android - Gestion des deux scénarios
                        if (isWebViewAgent) {
                              // Scenario 1: isWebViewAgent = true
                              setDynamicLink('https://play.google.com/store');
                              setTimeout(() => {
                                    setDynamicLink('https://play.google.com/store');
                              }, 500);
                        } else {
                              // Scenario 2: Navigateur classique Android
                              setDynamicLink('market://search?q=');
                              setTimeout(() => {
                                    setDynamicLink('https://play.google.com/store');
                              }, 500);
                        }
                  } else {
                        // Autres systèmes d'exploitation (Windows, Linux, etc.)
                        setDynamicLink('https://play.google.com/store');
                  }
            }
      }, [iconClass]);

      const handleClick = () => {
            try {
                  // Tenter d'ouvrir l'application via un intent
                  window.location.href = dynamicLink;
            } catch (error) {
                  // Si l'ouverture de l'application échoue, rediriger vers l'URL de fallback
                  setDynamicLink('https://play.google.com/store');
                  window.location.href = dynamicLink;
            }
      };

      return isSubmitButton ? (
            
            <button type="submit" className={`btn ${buttonClass}`}>
                  {iconPosition === 'left' && icon && <FontAwesomeIcon icon={icon} className='svg--left' />}
                  {label}
                  {iconPosition === 'right' && icon && <FontAwesomeIcon icon={icon} className='svg--right' />}
            </button>
      ) : (
            dynamicLink.startsWith('market://') ? (
                  // Utilisation d'un bouton pour les intents Android
                  <button onClick={handleClick} className={`btn ${buttonClass}`}>
                        {iconPosition === 'left' && icon && <FontAwesomeIcon icon={icon} className='svg--left' />}
                        {label}
                        {iconPosition === 'right' && icon && <FontAwesomeIcon icon={icon} className='svg--right' />}
                  </button>
            ) : (
                  // Utilisation d'un lien <a> pour les URLs classiques
                  <a href={dynamicLink} target="_blank" rel="noopener noreferrer">
                        <button className={`btn ${buttonClass}`}>
                              {iconPosition === 'left' && icon && <FontAwesomeIcon icon={icon} className='svg--left' />}
                              {label}
                              {iconPosition === 'right' && icon && <FontAwesomeIcon icon={icon} className='svg--right' />}
                        </button>
                  </a>
            )
      );
};

Btn.propTypes = {
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      iconPosition: PropTypes.oneOf(['left', 'right']),
      iconClass: PropTypes.string,
      buttonClass: PropTypes.string,
      isSubmitButton: PropTypes.bool,
};

export default Btn;
