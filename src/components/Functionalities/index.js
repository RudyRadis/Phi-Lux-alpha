'use client';

import PropTypes from 'prop-types';
import './functionalities.css';
import Card from '../Card';
import AsyncGrid from '../AsyncGrid';
import Image from 'next/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

const titleChild = (
      <Card
            typeOf="long"
            titleTag="h2"
            title="Apprend en ligne quand tu le veux et où tu le veux"
            descrip="Maîtrise les concepts mathématiques en 15 minutes par jour."
            btn={{
                  link: '/',
                  label: 'FAQ',
                  iconPosition: 'right',
                  iconClass: 'arrow-right',
                  buttonClass: 'btn--green',
                  link: '/faq'
            }}
      />
)

const titleParents = (
      <Card
            typeOf="long"
            titleTag="h2"
            title="Des enfants qui s’émancipent, des parents plus sereins"
            descrip="Des fonctionnalités qui raviront les parents."
            btn={{
                  link: '/',
                  label: 'Découvrir les formules',
                  iconClass: 'thumb',
                  buttonClass: 'btn--green',
                  link: '/#pricing'
            }}
      />
)

const titleMethodology = (
      <Card
            typeOf="long"
            titleTag="h2"
            title="Une méthodologie fun et innovante"
            descrip="Gagnes des points d’expérience, collectes des trophées, personnalises ton avatar, améliores ton classement général. Le savoir n’a jamais été aussi jouissif !"
            btn={{
                  link: '/',
                  label: 'Télécharger l\'application',
                  iconPosition: 'left',
                  iconClass: 'download',
                  buttonClass: 'btn--yellow'
            }}
      />
)

const cardsChild = [
      <Card
            key="1"
            typeOf="short"
            titleTag="h3"
            title="+ 800 exercices"
            number="01"
            numberColor="grey"
            descrip="Des quizs mais pas seulements ! Rédiges tes solutions en citant les propriétés mathématiques pertinentes. Et tires en les conclusions rigoureuses."
      />,
      <Card
            key="2"
            typeOf="short"
            titleTag="h3"
            title="+ 60 leçons"
            number="02"
            numberColor="grey"
            descrip="Les leçons sont calées sur le programme scolaire français."
      />,
      <Card
            key="3"
            typeOf="short"
            titleTag="h3"
            title="Des fiches révisions"
            number="03"
            numberColor="grey"
            descrip="Des fiches de révisions ludiques. Des résumés, des couleurs et de la clarté."
      />,
      <Card
            key="4"
            typeOf="short"
            titleTag="h3"
            title="Une préparation spécial Brevet"
            number="04"
            numberColor="grey"
            descrip="Toute la méthodologie expliquée. Des modules détaillés pour te préparer."
      />,
];

const cardsParents = [
      <Card
            key="1"
            typeOf="short"
            titleTag="h3"
            title="Contenu téléchargeable"
            number="01"
            numberColor="light"
            descrip="Possibilité de télécharger les cours au format PDF. Pour limiter les temps d’écran."
      />,
      <Card
            key="2"
            typeOf="short"
            titleTag="h3"
            title="Mode hors ligne"
            number="02"
            numberColor="light"
            descrip="Télécharges la leçon ou l’exercice pour travailler sans connexion internet."
      />,
      <Card
            key="3"
            typeOf="short"
            titleTag="h3"
            title="Progression et indicateurs"
            number="03"
            numberColor="light"
            descrip="Tes parents ont accès à ta progression via le tableau de bord."
      />,
];

const Functionalities = ({ typeOf }) => {


      switch (typeOf) {
            case 'child':

                  useLayoutEffect(() => {
                        gsap.registerPlugin(ScrollTrigger);
                        gsap.from(".child-functionalities__card .card__title", {
                              scrollTrigger: {
                                    trigger: ".child-functionalities__card .card__title",
                                    start: "top 100%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: -500,
                              opacity: 0,
                              ease: "power1.out"
                        });

                        gsap.from(".child-functionalities__card .card__descrip", {
                              scrollTrigger: {
                                    trigger: ".child-functionalities__card .card__title",
                                    start: "top 100%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: -500,
                              opacity: 0,
                              ease: "power1.out",
                              delay: 0.15
                        });

                        gsap.from(".child-functionalities__card .card__btn", {
                              scrollTrigger: {
                                    trigger: ".child-functionalities__card .card__title",
                                    start: "top 100%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: -500,
                              opacity: 0,
                              ease: "power1.out",
                              delay: 0.30
                        });

                        gsap.from(".child-functionalities__async-grid .async-grid-item.asg-item1", {
                              scrollTrigger: {
                                    trigger: ".child-functionalities__async-grid .async-grid-item.asg-item1",
                                    start: "top 100%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: 500,
                              opacity: 0,
                              ease: "power1.out"
                        });

                        gsap.from(".child-functionalities__async-grid .async-grid-item.asg-item2", {
                              scrollTrigger: {
                                    trigger: ".child-functionalities__async-grid .async-grid-item.asg-item1",
                                    start: "bottom 101%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: 500,
                              opacity: 0,
                              ease: "power1.out"
                        });

                        gsap.from(".child-functionalities__async-grid .async-grid-item.asg-item3", {
                              scrollTrigger: {
                                    trigger: ".child-functionalities__async-grid .async-grid-item.asg-item2",
                                    start: "bottom 101%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: 500,
                              opacity: 0,
                              ease: "power1.out"
                        });

                        gsap.from(".child-functionalities__async-grid .async-grid-item.asg-item4", {
                              scrollTrigger: {
                                    trigger: ".child-functionalities__async-grid .async-grid-item.asg-item3",
                                    start: "bottom 101%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: 500,
                              opacity: 0,
                              ease: "power1.out"
                        });
                  }, []);
                  return (
                        <section className="child-functionalities">
                              <div className="child-functionalities__bg--one">
                                    <Image src="ressources/home/logo-icon.svg" alt="Logo Phi-Lux" width={100} height={100} priority />
                              </div>


                              <div className="child-functionalities__content">
                                    <div className="child-functionalities__card">
                                          {titleChild}
                                    </div>
                                    <div className="child-functionalities__async-grid">
                                          <AsyncGrid cards={cardsChild} />
                                    </div>
                              </div>
                        </section>
                  );
            case 'parents':
                  useLayoutEffect(() => {
                        gsap.registerPlugin(ScrollTrigger);

                        gsap.from(".parents-functionalities__card .card__title", {
                              scrollTrigger: {
                                    trigger: ".parents-functionalities__card .card__title",
                                    start: "top 100%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: 500,
                              opacity: 0,
                              ease: "power1.out"
                        });

                        gsap.from(".parents-functionalities__card .card__descrip", {
                              scrollTrigger: {
                                    trigger: ".parents-functionalities__card .card__title",
                                    start: "top 100%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: 500,
                              opacity: 0,
                              ease: "power1.out",
                              delay: 0.15
                        });

                        gsap.from(".parents-functionalities__card .card__btn", {
                              scrollTrigger: {
                                    trigger: ".parents-functionalities__card .card__title",
                                    start: "top 100%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: 500,
                              opacity: 0,
                              ease: "power1.out",
                              delay: 0.30
                        });

                        gsap.from(".parents-functionalities__async-grid .async-grid-item.asg-item1", {
                              scrollTrigger: {
                                    trigger: ".parents-functionalities__async-grid .async-grid-item.asg-item1",
                                    start: "top 100%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: -500,
                              opacity: 0,
                              ease: "power1.out"
                        });

                        gsap.from(".parents-functionalities__async-grid .async-grid-item.asg-item2", {
                              scrollTrigger: {
                                    trigger: ".parents-functionalities__async-grid .async-grid-item.asg-item1",
                                    start: "bottom 101%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: -500,
                              opacity: 0,
                              ease: "power1.out"
                        });

                        gsap.from(".parents-functionalities__async-grid .async-grid-item.asg-item3", {
                              scrollTrigger: {
                                    trigger: ".parents-functionalities__async-grid .async-grid-item.asg-item2",
                                    start: "bottom 101%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: -500,
                              opacity: 0,
                              ease: "power1.out"
                        });
                  }, []);

                  return (
                        <section className="parents-functionalities">
                              <div className="parents-functionalities__bg--one">
                                    <Image src="ressources/home/pdf-icon.svg" alt="Icone PDF" width={100} height={100} />
                              </div>

                              <div className="parents-functionalities__bg--two">
                                    <Image src="ressources/home/book-icon.svg" alt="Icone Livre" width={100} height={100} />
                              </div>

                              <div className="parents-functionalities__content">
                                    <div className="parents-functionalities__async-grid">
                                          <AsyncGrid cards={cardsParents} />
                                    </div>
                                    <div className="parents-functionalities__card">
                                          {titleParents}
                                    </div>
                              </div>
                        </section>
                  );
            case 'methodology':
                  useLayoutEffect(() => {
                        gsap.registerPlugin(ScrollTrigger);

                        gsap.from(".methodology__card .card__title", {
                              scrollTrigger: {
                                    trigger: ".methodology__card .card__title",
                                    start: "top 100%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: 500,
                              opacity: 0,
                              ease: "power1.out"
                        });

                        gsap.from(".methodology__card .card__descrip", {
                              scrollTrigger: {
                                    trigger: ".methodology__card .card__title",
                                    start: "top 100%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: 500,
                              opacity: 0,
                              ease: "power1.out",
                              delay: 0.15
                        });

                        gsap.from(".methodology__card .card__btn", {
                              scrollTrigger: {
                                    trigger: ".methodology__card .card__title",
                                    start: "top 100%",
                                    toggleActions: "play none none none",
                              },
                              duration: 0.5,
                              x: 500,
                              opacity: 0,
                              ease: "power1.out",
                              delay: 0.30
                        });
                  }, []);
                  return (
                        <section className="methodology">
                              <div className="methodology__bg--one">
                                    <Image src="ressources/home/game-icon.svg" alt="Icone Jeux" width={100} height={100} />
                              </div>

                              <div className="methodology__bg--two">
                                    <Image src="ressources/home/diamond-icon.svg" alt="Icone Diamant" width={100} height={100} />
                              </div>

                              <div className="methodology__bg--three">
                                    <Image src="ressources/home/present-icon.svg" alt="Icone Cadeau" width={100} height={100} />
                              </div>

                              <div className="methodology__content">
                                    <div className="methodology__card">
                                          {titleMethodology}
                                    </div>
                              </div>

                        </section>
                  );
            default:
                  return null;

      }



};

Functionalities.propTypes = {
      typeOf: PropTypes.string.isRequired,
};

export default Functionalities;