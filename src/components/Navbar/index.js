'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './navbar.css';
import globalData from '@/app/globalData';

const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isFixed, setIsFixed] = useState(false);

      const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
            document.body.style.overflow = isMenuOpen ? '' : 'hidden';
      };

      const closeMenu = (linkName) => {
            if (linkName === 'pricing') {
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
            } else {
                  document.body.style.overflow = '';
            }
      };

      useEffect(() => {
            const handleScroll = () => {
                  const bannerHeight = document.querySelector('.home-banner')?.offsetHeight || 0;
                  setIsFixed(window.scrollY > bannerHeight);
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, []);


      return (
            <nav className={`navbar ${isFixed ? 'navbar__fixed' : ''} ${isMenuOpen ? 'open' : ''}`}>
                  <div className="navbar__logo">
                        <Link href="/">
                              <img src="/ressources/logo/logo-philux-yellow.svg" alt={`Logo ${globalData.appTitle}`} />
                        </Link>
                        <Link href="/">
                              {globalData.appTitle}
                        </Link>
                  </div>

                  <ul className={`navbar__links ${isMenuOpen ? 'open' : ''}`}>
                        <li>
                              <Link href="/#pricing" onClick={() => closeMenu('pricing')}>
                                    Tarifs
                              </Link>
                        </li>
                        <li>
                              <Link href="/faq" onClick={() => closeMenu('faq')}>
                                    FAQ
                              </Link>
                        </li>
                        <li>
                              <Link href="/contact" onClick={() => closeMenu('contact')}>
                                    Contact
                              </Link>
                        </li>
                  </ul>

                  <button className={`navbar__hamburger ${isMenuOpen ? 'open' : ''}`} type="button" aria-label="Toggle navigation" aria-expanded={isMenuOpen} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                  </button>
            </nav>
      );
};

export default Navbar;