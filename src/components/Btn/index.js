'use client'

import Link from 'next/link';
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
    // Détection du type d'appareil
    const userAgent = navigator.userAgent.toLowerCase();
    if (iconClass === 'download') {
      if (/iphone|ipad|ipod/.test(userAgent)) {
        // Appareil iOS (iPhone, iPad, iPod)
        setDynamicLink('https://apps.apple.com/us/app');
      } else if (/macintosh/.test(userAgent)) {
        // MacOS
        setDynamicLink('https://www.apple.com/app-store/');
      } else if (/android/.test(userAgent)) {
        // Appareil Android
        setDynamicLink('intent://play.google.com/store/apps#Intent;scheme=https;package=com.android.vending;end');
      } else {
        // Autres systèmes d'exploitation (Windows, Linux, etc.)
        setDynamicLink('https://play.google.com/store');
      }
    }
  }, [iconClass]);

  return isSubmitButton ? (
    <button type="submit" className={`btn ${buttonClass}`}>
      {iconPosition === 'left' && icon && <FontAwesomeIcon icon={icon} className='svg--left' />}
      {label}
      {iconPosition === 'right' && icon && <FontAwesomeIcon icon={icon} className='svg--right' />}
    </button>
  ) : (
    <Link href={dynamicLink} {...(iconClass === 'download' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      <button className={`btn ${buttonClass}`}>
        {iconPosition === 'left' && icon && <FontAwesomeIcon icon={icon} className='svg--left' />}
        {label}
        {iconPosition === 'right' && icon && <FontAwesomeIcon icon={icon} className='svg--right' />}
      </button>
    </Link>
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
