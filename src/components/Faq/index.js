'use client';

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './faq.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import globalData from '@/app/globalData';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const buttonRefs = useRef([]);
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        if (contentRefs.current[activeIndex]) {
            contentRefs.current[activeIndex].style.height = `calc(${contentRefs.current[activeIndex].scrollHeight}px + 1rem)`;
        }
        contentRefs.current.forEach((content, index) => {
            if (index !== activeIndex && content) {
                content.style.height = '0px';
            }
        });
    }, [activeIndex]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".faq__title", {
            scrollTrigger: {
                trigger: ".faq__title",
                start: "top 100%",
                toggleActions: "play none none none",
            },
            duration: 0.5,
            x: 500,
            opacity: 0,
            ease: "power1.out"
        });

        // Créer une timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".faq__accordion",
                start: "top 100%",
                toggleActions: "play none none none",
            }
        });

        // Sélectionner tous les éléments enfants avec la classe .accordion
        const accordions = document.querySelectorAll(".faq__accordion .accordion");

        // Boucler sur chaque élément et ajouter l'animation à la timeline avec un délai de 0.15s entre chaque
        accordions.forEach((accordion, index) => {
            tl.from(accordion, {
                duration: 0.5,
                x: -500,
                opacity: 0,
                ease: "power1.out",
            }, index * 0.15); // Délai de 0.15s entre chaque élément
        });
    }, []);

    return (
        <section className="faq">
            <div className="faq__content">
                <div className="faq__title">
                    <h2>FAQ</h2>
                </div>

                <div className="faq__accordion">
                    {faqItems.map((item, index) => (
                        <div key={index} className="accordion">
                            <button
                                ref={(el) => (buttonRefs.current[index] = el)}
                                className={`accordion__btn ${activeIndex === index ? 'open--accordion' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.question}
                                <FontAwesomeIcon
                                    icon={activeIndex === index ? faArrowUp : faArrowDown}
                                    className='faq__icon'
                                    height={'1rem'}
                                />
                            </button>
                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className="accordion__content"
                                style={{
                                    overflow: 'hidden',
                                    transition: 'height 0.2s ease',
                                    backgroundColor: activeIndex === index ? '#F7FCFC' : 'transparent',
                                }}
                            >
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const faqItems = [
    {
        question: `Quelles classes couvre ${globalData.appTitle} ?`,
        answer:
            `L'application ${globalData.appTitle} couvre actuellement les classes du collège. Donc, de la 6e à la 3e. Le contenu est régulièrement mis à jour et les classes du lycée seront bientôt disponibles.`,
    },
    {
        question: "Comment accéder à l’application ?",
        answer: "Pour les téléphones Android, vous pouvez télécharger l'application sur le Playstore. Pour les téléphones iOS (iPhone), l'application est disponible sur l'App Store. Une fois téléchargée, créez votre compte et celui de votre enfant. Vous disposez de 14 jours d'essai gratuit. Profitez-en !",
    },
    {
        question: "Comment annuler le renouvellement de l'abonnement ?",
        answer: "Rien de plus simple. Dans la section 'Compte' de l'application, cliquez sur 'Abonnement' et décochez la case 'Renouvellement automatique'.",
    },
    {
        question: `Mon enfant doit-il être encadré pour travailler sur ${globalData.appTitle} ?`,
        answer: "Il est recommandé de faire le point régulièrement avec votre enfant. Prenez 20 minutes par semaine pour consulter sa progression via son tableau de bord. Discutez-en avec lui. ",
    },
    {
        question: `Mon enfant a-t-il besoin de ${globalData.appTitle} en plus de ses cours particuliers ?`,
        answer: `Oui ! ${globalData.appTitle} est une application pédagogique qui permettra à votre enfant de progresser de manière autonome et ludique. C'est un outil complémentaire avec les cours particuliers.`,
    },
    {
        question: `Mon enfant n’a pas de problème à l’école, a-t-il besoin de ${globalData.appTitle} ?`,
        answer: `Oui aussi ! Car même si votre enfant n'a pas de problème pour progresser à l'école, il aura accès à tout le contenu disponible en mathématiques pour progresser. Grâce à ${globalData.appTitle}, il pourra conserver son niveau.`,
    },
];

export default Faq;
