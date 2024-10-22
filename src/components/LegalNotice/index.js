'use client';

import './legal-notice.css';

const LegalNotice = () => {
    return (
        <section className="legal-notice">
            <div className="legal-notice__content">
                <div className="legal-notice__title">
                    <h2>Nos mentions légales</h2>
                </div>

                <div className="legal-notice__txt">
                    <h3>1. Éditeur du site</h3>
                    <p>
                        Nom de l'entreprise : [Nom de l'entreprise] <br />
                        Forme juridique : [Forme juridique] <br />
                        Adresse : [Adresse complète] <br />
                        Numéro de téléphone : [Numéro de téléphone] <br />
                        Adresse e-mail : [Adresse e-mail de l'entreprise] <br />
                        Numéro d'immatriculation : [Numéro d'immatriculation au RCS ou au répertoire des métiers] <br />
                        Numéro de TVA intracommunautaire : [Numéro de TVA] (si applicable)
                    </p>

                    <h3>2. Hébergeur du site</h3>
                    <p>
                        Hébergeur : [Nom de l'hébergeur] <br />
                        Adresse : [Adresse de l'hébergeur] <br />
                        Numéro de téléphone : [Numéro de téléphone de l'hébergeur] <br />
                        Adresse e-mail : [Adresse e-mail de l'hébergeur]
                    </p>

                    <h3>3. Responsabilité</h3>
                    <p>
                        L'éditeur du site met tout en œuvre pour offrir aux utilisateurs des informations et/ou des outils
                        disponibles et vérifiés, mais ne saurait être tenu pour responsable des erreurs, d'une absence de
                        disponibilité des fonctionnalités ou de la présence de virus sur son site.
                    </p>
                    <p>
                        Les informations fournies sur ce site le sont à titre indicatif et ne sauraient dispenser
                        l'utilisateur d'une analyse complémentaire et personnalisée.
                    </p>

                    <h3>4. Propriété intellectuelle</h3>
                    <p>
                        Le contenu du site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de
                        [Nom de l'entreprise] ou de ses partenaires. Toute reproduction, distribution, modification,
                        adaptation, retransmission ou publication, même partielle, de ces différents éléments est
                        strictement interdite sans l'accord écrit préalable de [Nom de l'entreprise].
                    </p>
                    <p>
                        Toute utilisation non autorisée de ces contenus entraînera des poursuites judiciaires conformément
                        aux lois en vigueur.
                    </p>

                    <h3>5. Liens hypertextes</h3>
                    <p>
                        Le site [Nom du site] peut contenir des liens hypertextes vers d'autres sites. [Nom de l'entreprise]
                        n'assume aucune responsabilité quant au contenu des sites vers lesquels ces liens renvoient. L'accès
                        à ces sites s'effectue sous l'entire responsabilité de l'utilisateur.
                    </p>

                    <h3>6. Cookies</h3>
                    <p>
                        Le site [Nom du site] peut collecter automatiquement des informations standards telles que des
                        données de navigation à l'aide de cookies. Ces informations sont utilisées exclusivement à des fins
                        statistiques et pour améliorer l'expérience utilisateur.
                    </p>
                    <p>
                        Pour en savoir plus sur l'utilisation des cookies et la manière de les désactiver, veuillez
                        consulter notre <a href="[URL vers la politique de confidentialité]">politique de
                            confidentialité</a>.
                    </p>

                    <h3>7. Loi applicable</h3>
                    <p>
                        Les présentes mentions légales sont régies par les lois françaises. En cas de litige, et à défaut de
                        résolution amiable, les tribunaux français seront seuls compétents pour juger du différend.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LegalNotice;
