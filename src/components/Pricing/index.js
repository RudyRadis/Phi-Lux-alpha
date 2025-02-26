import PropTypes from 'prop-types';
import './pricing.css';
import Card from '../Card';
import Btn from '../Btn';
import Image from 'next/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import globalData from '@/app/globalData';

const Pricing = () => {

      useLayoutEffect(() => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.from(".pricing__title .card__title", {
                  scrollTrigger: {
                        trigger: ".pricing__title .card__title",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: -500,
                  opacity: 0,
                  ease: "power1.out"
            });

            gsap.from(".pricing__title .card__descrip", {
                  scrollTrigger: {
                        trigger: ".pricing__title .card__title",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: 500,
                  opacity: 0,
                  ease: "power1.out",
                  delay: 0.15
            });

            gsap.from(".pricing__card--one", {
                  scrollTrigger: {
                        trigger: ".pricing__card--one",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: 500,
                  opacity: 0,
                  ease: "power1.out"
            });

            const delayConditionOne = window.innerWidth > 1250 ? 0.15 : 0;
            const delayConditionTwo = window.innerWidth > 1250 ? 0.3 : 0;

            gsap.from(".pricing__card--two", {
                  scrollTrigger: {
                        trigger: ".pricing__card--two",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: 500,
                  opacity: 0,
                  delay: delayConditionOne,
                  ease: "power1.out"
            });

            gsap.from(".pricing__card--three", {
                  scrollTrigger: {
                        trigger: ".pricing__card--three",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: 500,
                  opacity: 0,
                  delay: delayConditionTwo,
                  ease: "power1.out"
            });

            gsap.from(".pricing__btn", {
                  scrollTrigger: {
                        trigger: ".pricing__btn",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: -500,
                  opacity: 0,
                  ease: "power1.out"
            });
      }, []);

      return (
            <section className="pricing" id="pricing">
                  <div className="pricing__content">
                        <div className="pricing__title">
                              <Card
                                    typeOf="long"
                                    titleTag="h2"
                                    title={`Offres ${globalData.appTitle}`}
                                    descrip="Choisi l'abonnement qui te convient."
                                    colorDescrip="green"
                              />
                        </div>

                        <div className="pricing__cards">
                              <div className="pricing__card--one">
                                    <div className="pricing-card__bg">
                                          <Image src="/ressources/home/offer-icon.svg" alt="" width={64} height={64} />
                                    </div>
                                    <div className="pricing-card__header">
                                          <div className="pricing-card__title">
                                                <h3>Mensuel</h3>
                                          </div>
                                          <div className="pricing-card__price">8.99 € / mois</div>
                                    </div>
                                    <div className="pricing-card__descrip">Sans engagement</div>
                              </div>

                              <div className="pricing__card--two">
                                    <div className="pricing-card__bg">
                                          <Image src="/ressources/home/offer-icon.svg" alt="" width={64} height={64} />
                                    </div>
                                    <div className="pricing-card__header">
                                          <div className="pricing-card__title">
                                                <h3>Biannuel</h3>
                                          </div>
                                          <div className="pricing-card__price">7.79 € / mois</div>
                                    </div>
                                    <div className="pricing-card__descrip">Paiement en 1 fois de 46.74 €</div>
                              </div>

                              <div className="pricing__card--three">
                                    <div className="pricing-card__bg">
                                          <Image src="/ressources/home/offer-icon.svg" alt="" width={64} height={64} />
                                    </div>
                                    <div className="pricing-card__header">
                                          <div className="pricing-card__title">
                                                <h3>Annuel</h3>
                                          </div>
                                          <div className="pricing-card__price">5.99 € / mois</div>
                                    </div>
                                    <div className="pricing-card__descrip">Paiement en 1 fois de 71.88 €</div>
                              </div>
                        </div>

                        <div className="pricing__btn">
                              <Btn
                                    link="/"
                                    label="Télécharger l'application"
                                    iconPosition="left"
                                    iconClass="download"
                                    buttonClass="btn--yellow"
                              />
                        </div>
                  </div>
            </section>
      );
};

Pricing.propTypes = {
      isHome: PropTypes.bool,
};

export default Pricing;