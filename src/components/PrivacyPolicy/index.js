'use client';

import './privacy-policy.css';

const PrivacyPolicy = () => {
    return (
        <section className="privacy-policy">
            <div className="privacy-policy__content">
                <div className="privacy-policy__title">
                    <h2>Notre politique de confidentialité</h2>
                </div>

                <div className="privacy-policy__txt">
                    <h3>1. Introduction</h3>
                    <p>
                        La protection de vos données personnelles est une priorité pour [Nom de l'entreprise]. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web [Nom du site].
                    </p>

                    <h3>2. Données collectées</h3>
                    <p>
                        Nous collectons les données personnelles suivantes :
                    </p>
                    <ul>
                        <li>Informations d'identification : nom, prénom, adresse e-mail, numéro de téléphone.</li>
                        <li>Données de connexion : adresse IP, identifiants de connexion, type de navigateur.</li>
                        <li>Données de navigation : pages consultées, durée de visite, clics et interactions sur le site.</li>
                    </ul>

                    <h3>3. Méthode de collecte des données</h3>
                    <p>
                        Les données personnelles peuvent être collectées via :
                    </p>
                    <ul>
                        <li>Formulaires de contact ou d'inscription.</li>
                        <li>Cookies et technologies similaires (voir section sur les cookies).</li>
                        <li>Interactions directes par e-mail ou téléphone.</li>
                    </ul>

                    <h3>4. Utilisation des données</h3>
                    <p>
                        Les données collectées sont utilisées pour :
                    </p>
                    <ul>
                        <li>Fournir et améliorer nos services.</li>
                        <li>Répondre à vos demandes et communiquer avec vous.</li>
                        <li>Analyser et optimiser votre expérience sur notre site.</li>
                        <li>Envoyer des offres promotionnelles ou des informations marketing (avec votre consentement).</li>
                    </ul>

                    <h3>5. Partage des données</h3>
                    <p>
                        Nous nous engageons à ne pas vendre, louer ou partager vos données personnelles avec des tiers, sauf dans les cas suivants :
                    </p>
                    <ul>
                        <li>Partenaires de confiance qui nous aident à exploiter notre site et à fournir nos services, sous réserve qu'ils respectent les mêmes obligations de confidentialité.</li>
                        <li>Conformité avec la loi, une réglementation ou une demande légale.</li>
                    </ul>

                    <h3>6. Cookies et technologies similaires</h3>
                    <p>
                        Nous utilisons des cookies pour améliorer votre expérience sur notre site, notamment pour :
                    </p>
                    <ul>
                        <li>Analyser les statistiques de fréquentation.</li>
                        <li>Adapter le contenu en fonction de vos préférences.</li>
                        <li>Assurer le bon fonctionnement et la sécurité du site.</li>
                    </ul>
                    <p>
                        Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsque des cookies sont envoyés. Toutefois, certaines parties de notre site peuvent ne pas fonctionner correctement sans cookies.
                    </p>

                    <h3>7. Durée de conservation des données</h3>
                    <p>
                        Vos données personnelles sont conservées pour une durée n'excédant pas celle nécessaire aux finalités pour lesquelles elles sont collectées, conformément aux exigences légales en vigueur.
                    </p>

                    <h3>8. Sécurité des données</h3>
                    <p>
                        Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou divulgation.
                    </p>

                    <h3>9. Vos droits</h3>
                    <p>
                        Conformément à la réglementation applicable, vous disposez des droits suivants :
                    </p>
                    <ul>
                        <li>Droit d'accès, de rectification et de suppression de vos données personnelles.</li>
                        <li>Droit d'opposition ou de limitation du traitement de vos données.</li>
                        <li>Droit à la portabilité de vos données.</li>
                    </ul>
                    <p>
                        Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : [Adresse e-mail de l'entreprise].
                    </p>

                    <h3>10. Modifications de la politique de confidentialité</h3>
                    <p>
                        [Nom de l'entreprise] se réserve le droit de modifier cette politique de confidentialité à tout moment. Nous vous informerons de tout changement par une mise à jour sur cette page.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
