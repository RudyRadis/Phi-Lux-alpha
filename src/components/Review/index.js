'use client';

import PropTypes from 'prop-types';
import './review.css';
import Image from 'next/image';
import { useEffect } from 'react';
import Card from '../Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

const Review = () => {
      useEffect(() => {
            const carrouselEls = document.querySelectorAll('.review__carrousel');
            carrouselEls.forEach(carrouselEl => {
                  new Carrousel(carrouselEl);
            });
      }, []);

      useLayoutEffect(() => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.from(".review__content", {
                  scrollTrigger: {
                        trigger: ".review__content",
                        toggleActions: "play none none none",
                        start: "top 90%",
                        end: "bottom 90%",
                        scrub: 1.5,
                  },
                  duration: 2,
                  y: -300,
                  opacity: 0,
                  ease: "power1.out"
            });

            gsap.from(".review__card .card__title", {
                  scrollTrigger: {
                        trigger: ".review__card .card__title",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: -500,
                  opacity: 0,
                  ease: "power1.out"
            });

            gsap.from(".review__card .card__btn", {
                  scrollTrigger: {
                        trigger: ".review__card .card__title",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: -500,
                  opacity: 0,
                  ease: "power1.out",
                  delay: 0.15
            });

            gsap.from(".review__card .review__dowload-app", {
                  scrollTrigger: {
                        trigger: ".review__card .card__title",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: -500,
                  opacity: 0,
                  ease: "power1.out",
                  delay: 0.30
            });

            gsap.from(".review__carrousel", {
                  scrollTrigger: {
                        trigger: ".review__carrousel",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: 500,
                  opacity: 0,
                  ease: "power1.out",
            });
      }, []);

      return (
            <section className="review">
                  <div className="review__vrtcl-lns">
                        {[...Array(10)].map((_, index) => (
                              <div key={index} className="review__vrtcl-ln"></div>
                        ))}
                  </div>
                  <div className="review__content">


                        <div className="review__card">
                              <Card
                                    typeOf="long"
                                    titleTag="h2"
                                    title="Approuvé par les parents"
                                    btn={{
                                          link: '/',
                                          label: "Télécharger l'application",
                                          iconPosition: "left",
                                          iconClass: "download",
                                          buttonClass: "btn--yellow"
                                    }}
                                    isReview={true}
                              />
                        </div>

                        <div className="review__carrousel">
                              <div className="carrousel__slides">
                                    {[...Array(4)].map((_, index) => (
                                          <div key={index} className="slide">
                                                <div className="slide__header">
                                                      <Image src={`/ressources/review/review-img-${index + 1}.jpg`} alt="Image" width={100} height={100} className="slide__img" />
                                                      <h3 className="slide__title">{['Natalie F.', 'Sarah N.', 'Karim E.', 'Jean Philipe A.'][index]}</h3>
                                                      <div className="slide__rating">★★★★★</div>
                                                </div>
                                                <div className="slide__separator"></div>
                                                <div className="slide__desc">
                                                      {[
                                                            "Phi-Lux est un super outil qui a permis à ma fille de surmonter ses difficultés en maths. Les cours sont complets et les exercices interactifs permettent une meilleure compréhension. Je recommande à 100% !",
                                                            "Application complète et ludique, facile d'utilisation. Nous avons maintenant le recul pour constater les progrès réalisés. Un très bon complément pour les révisions en mathématiques. Je recommande vivement Phi-Lux !",
                                                            "J'ai conseillé Phi-Lux à des amis et je le referai san hésiter. C'est un excellent outils pour réviser ou approfondir le travail de son enfant. Faites votre propre expérience, cela en vaut la peine;",
                                                            "Excellente application pour accompagner notre fils dans son envie d'apprendre et de développer ses connaissances en mathématiques ! L'interface est agréable et facile à utiliser, et les exercices corrigés lui ont permis d'obtenir de meilleures notes aux évaluations. Merci, Phi-Lux !",
                                                      ][index]}
                                                </div>
                                          </div>
                                    ))}
                                    <div className="carrousel__controls">
                                          <div className="control__left">
                                                <FontAwesomeIcon icon={faArrowLeft} />
                                          </div>
                                          <div className="control__right">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>
            </section>
      );
};

class Carrousel {
      constructor(carrouselEl) {
            this.currentSlideIndex = 0;
            this.carrouselEl = carrouselEl;
            this.slides = Array.from(this.carrouselEl.querySelector('.carrousel__slides').children).slice(0, -1);
            this.arrowLeft = this.carrouselEl.querySelector('.control__left');
            this.arrowRight = this.carrouselEl.querySelector('.control__right');

            this.initSlides();
            this.createEventListeners();
      }

      initSlides() {
            this.slides[0].style.marginLeft = '0%';
      }

      createEventListeners() {
            this.arrowLeft.addEventListener('click', () => this.slideTo(this.currentSlideIndex - 1));
            this.arrowRight.addEventListener('click', () => this.slideTo(this.currentSlideIndex + 1));
      }

      slideTo(slideIndex) {
            let newIndex = (slideIndex + this.slides.length) % this.slides.length;
            this.currentSlideIndex = newIndex;

            this.slides[0].style.marginLeft = `calc(-${this.currentSlideIndex * 100}% - ${this.currentSlideIndex * 1}rem)`;
      }
}

Review.propTypes = {
      isHome: PropTypes.bool,
};

export default Review;