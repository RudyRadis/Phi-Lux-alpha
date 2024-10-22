'use client';

import { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Btn from '../Btn';
import { faSmileBeam, faPhone, faEnvelope, faTag, faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

const Contact = () => {
      const [formData, setFormData] = useState({
            name: '',
            surname: '',
            phone: '',
            mail: '',
            object: '',
            message: ''
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value
            });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
          
            try {
              const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });
          
              if (response.ok) {
                  alert('Mail envoyé avec succès');
                  window.location.reload();
              } else {
                console.error('Erreur lors de l\'envoi de l\'email');
              }
            } catch (error) {
              console.error('Erreur lors de l\'envoi de l\'email:', error);
            }
          };

      useLayoutEffect(() => {
            gsap.registerPlugin(ScrollTrigger);

            const delayCondition = window.innerWidth > 768 ? 0.15 : 0;
            const xCondition = window.innerWidth > 768 ? -1 : 1;

            gsap.from(".contact__title", {
                  scrollTrigger: {
                        trigger: ".contact__title",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: -500,
                  opacity: 0,
                  ease: "power1.out"
            });

            gsap.from(".form-item:nth-of-type(1)", {
                  scrollTrigger: {
                        trigger: ".form-item:nth-of-type(1)",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: 500 * xCondition,
                  opacity: 0,
                  ease: "power1.out"
            });

            gsap.from(".form-item:nth-of-type(2)", {
                  scrollTrigger: {
                        trigger: ".form-item:nth-of-type(2)",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: 500,
                  opacity: 0,
                  delay: delayCondition,
                  ease: "power1.out"
            });

            gsap.from(".form-item:nth-of-type(3)", {
                  scrollTrigger: {
                        trigger: ".form-item:nth-of-type(3)",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: 500 * xCondition,
                  opacity: 0,
                  ease: "power1.out"
            });

            gsap.from(".form-item:nth-of-type(4)", {
                  scrollTrigger: {
                        trigger: ".form-item:nth-of-type(4)",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: 500,
                  opacity: 0,
                  delay: delayCondition,
                  ease: "power1.out"
            });

            gsap.from(".form-item:nth-of-type(5)", {
                  scrollTrigger: {
                        trigger: ".form-item:nth-of-type(5)",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: 500 * xCondition,
                  opacity: 0,
                  ease: "power1.out"
            });

            gsap.from(".form-item:nth-of-type(6)", {
                  scrollTrigger: {
                        trigger: ".form-item:nth-of-type(6)",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: 500,
                  opacity: 0,
                  ease: "power1.out"
            });

            gsap.from(".send-msg__info", {
                  scrollTrigger: {
                        trigger: ".send-msg__info",
                        start: "top 100%",
                        toggleActions: "play none none none",
                  },
                  duration: 0.5,
                  x: -500,
                  opacity: 0,
                  ease: "power1.out"
            });

            gsap.from(".send-msg__btn", {
                  scrollTrigger: {
                        trigger: ".send-msg__btn",
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
            <section className="contact">
                  <div className="contact__content">
                        <div className="contact__title">
                              <h2>Comment pouvons-nous t’aider ?</h2>
                        </div>
                        <form className="contact__form" onSubmit={handleSubmit}>
                              <div className="form-items">
                                    <div className="form-item">
                                          <label htmlFor="name">Prénom</label>
                                          <div className="input-container">
                                                <input
                                                      type="text"
                                                      id="name"
                                                      name="name"
                                                      value={formData.name}
                                                      onChange={handleChange}
                                                      required
                                                      placeholder="Quel est ton prénom ?"
                                                />
                                                <FontAwesomeIcon icon={faSmileBeam} />
                                          </div>
                                    </div>

                                    <div className="form-item">
                                          <label htmlFor="surname">Nom</label>
                                          <div className="input-container">
                                                <input
                                                      type="text"
                                                      id="surname"
                                                      name="surname"
                                                      value={formData.surname}
                                                      onChange={handleChange}
                                                      required
                                                      placeholder="Quel est ton nom ?"
                                                />
                                                <FontAwesomeIcon icon={faSmileBeam} />
                                          </div>
                                    </div>

                                    <div className="form-item">
                                          <label htmlFor="phone">Numéro de téléphone</label>
                                          <div className="input-container">
                                                <input
                                                      type="tel"
                                                      id="phone"
                                                      name="phone"
                                                      value={formData.phone}
                                                      onChange={handleChange}
                                                      required
                                                      placeholder="Quel est ton numéro de téléphone ?"
                                                />
                                                <FontAwesomeIcon icon={faPhone} />
                                          </div>
                                    </div>

                                    <div className="form-item">
                                          <label htmlFor="mail">Email</label>
                                          <div className="input-container">
                                                <input
                                                      type="email"
                                                      id="mail"
                                                      name="mail"
                                                      value={formData.mail}
                                                      onChange={handleChange}
                                                      required
                                                      placeholder="Quel est ton adresse mail ?"
                                                />
                                                <FontAwesomeIcon icon={faEnvelope} />
                                          </div>
                                    </div>

                                    <div className="form-item">
                                          <label htmlFor="object">Objet du message</label>
                                          <div className="input-container">
                                                <input
                                                      type="text"
                                                      id="object"
                                                      name="object"
                                                      value={formData.object}
                                                      onChange={handleChange}
                                                      required
                                                      placeholder="Quel est l'objet de ton message ?"
                                                />
                                                <FontAwesomeIcon icon={faTag} />
                                          </div>
                                    </div>

                                    <div className="form-item">
                                          <label htmlFor="message">Message</label>
                                          <div className="input-container">
                                                <textarea
                                                      id="message"
                                                      name="message"
                                                      rows="5"
                                                      value={formData.message}
                                                      onChange={handleChange}
                                                      required
                                                      placeholder="Quel est ton message ?"
                                                ></textarea>
                                                <FontAwesomeIcon icon={faCommentDots} />
                                          </div>
                                    </div>
                              </div>

                              <div className="send-msg">
                                    <div className="send-msg__info">
                                          <p>
                                                Nous nous engageons à protéger votre vie privée. Nous ne collecterons jamais d'informations vous concernant sans votre consentement explicite.
                                          </p>
                                    </div>

                                    <div className="send-msg__btn">
                                          <Btn
                                                isSubmitButton={true}
                                                label='Envoyer le message'
                                                iconPosition='left'
                                                iconClass='send'
                                                buttonClass='btn--green submit-btn'
                                          />
                                    </div>
                              </div>
                        </form>
                  </div>
            </section>
      );
};

export default Contact;
