import { FadeIn } from "../components/FadeIn";

export const Legal = () => {
  return (
    <div className="py-20">
      <div className="container">
        <FadeIn>
          <h1 className="mb-12 text-4xl font-bold text-center">
            Mentions Légales
          </h1>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn className="delay-100">
            <div className="mx-auto prose prose-lg">
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold">
                  Informations Légales
                </h2>
                <p className="text-dark/70">
                  Ce site est édité par [Votre Nom], développeur web
                  indépendant.
                </p>
                <p className="text-dark/70">
                  Email : [votre.email@example.com]
                </p>
              </section>

              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold">Hébergement</h2>
                <p className="text-dark/70">
                  Ce site est hébergé par [Nom de l'hébergeur]
                  <br />
                  Adresse : [Adresse de l'hébergeur]
                </p>
              </section>

              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold">
                  Propriété Intellectuelle
                </h2>
                <p className="text-dark/70">
                  L'ensemble de ce site relève de la législation française et
                  internationale sur le droit d'auteur et la propriété
                  intellectuelle. Tous les droits de reproduction sont réservés,
                  y compris pour les documents téléchargeables et les
                  représentations iconographiques et photographiques.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold">
                  Protection des Données Personnelles
                </h2>
                <p className="text-dark/70">
                  Conformément à la loi "Informatique et Libertés" du 6 janvier
                  1978 modifiée, et au Règlement Général sur la Protection des
                  Données (RGPD), vous disposez d'un droit d'accès, de
                  rectification et de suppression des données vous concernant.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold">Cookies</h2>
                <p className="text-dark/70">
                  Ce site utilise des cookies pour améliorer l'expérience de
                  navigation. Vous pouvez à tout moment désactiver l'utilisation
                  de cookies en sélectionnant les paramètres appropriés de votre
                  navigateur.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold">Contact</h2>
                <p className="text-dark/70">
                  Pour toute question concernant ces mentions légales, vous
                  pouvez nous contacter à l'adresse suivante :
                  [votre.email@example.com]
                </p>
              </section>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
