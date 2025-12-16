import { Container } from "../components/layout/Container";
import {
  ButtonRectangularPrimary,
  ButtonUnderlineSecondaryHoveredPrimary,
  FadeIn,
} from "../components/ui";
import { useMeta } from "../hooks";

const Legal = () => {
  // SEO dynamique unifié
  useMeta({
    title: "Mentions Légales",
    description:
      "Mentions légales du portfolio de Pierre Mazelaygue. Informations sur l'éditeur, l'hébergement, la propriété intellectuelle, la protection des données et la politique des cookies.",
    keywords:
      "mentions légales, Pierre Mazelaygue, portfolio, RGPD, cookies, propriété intellectuelle, hébergement, Netlify",
    ogTitle: "Mentions Légales - Pierre Mazelaygue",
    ogDescription:
      "Mentions légales et informations juridiques du portfolio de Pierre Mazelaygue, développeur Fullstack",
  });
  return (
    <section className="py-24">
      <Container>
        {/* Bouton de navigation */}
        <FadeIn>
          <div className="mb-8">
            <ButtonRectangularPrimary onClick={() => window.history.back()}>
              ← Retour
            </ButtonRectangularPrimary>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="relative mb-12 text-3xl font-bold">
            <span className="relative inline-block">
              <span
                className="absolute -inset-1 block -skew-y-3 bg-orange-200"
                aria-hidden="true"
              ></span>
              <span className="relative">Mentions Légales</span>
            </span>
          </h2>
        </FadeIn>

        <div className="mx-auto max-w-3xl">
          <FadeIn className="delay-100">
            <div className="space-y-8">
              <div
                id="informations-legales"
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-semibold">
                  1. Informations Légales
                </h3>
                <p className="text-text-secondary">
                  Ce site est édité par Pierre MAZELAYGUE, développeur web
                  indépendant.
                </p>
              </div>

              <div
                id="hebergement"
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-semibold">2. Hébergement</h3>
                <p className="text-text-secondary">
                  Ce site est hébergé par Netlify, Inc. 2325 3rd Street, Suite
                  296, San Francisco, CA 94107, États-Unis.
                </p>
              </div>

              <div
                id="propriete-intellectuelle"
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-semibold">
                  3. Propriété Intellectuelle
                </h3>
                <p className="text-text-secondary">
                  L'ensemble de ce site relève de la législation française et
                  internationale sur le droit d'auteur et la propriété
                  intellectuelle. Tous les droits de reproduction sont réservés,
                  y compris pour les documents téléchargeables et les
                  représentations iconographiques et photographiques.
                </p>
              </div>

              <div
                id="protection-donnees"
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-semibold">
                  4. Protection des Données Personnelles
                </h3>
                <p className="text-text-secondary">
                  Conformément à la loi "Informatique et Libertés" du 6 janvier
                  1978 modifiée, et au Règlement Général sur la Protection des
                  Données (RGPD), vous disposez d'un droit d'accès, de
                  rectification et de suppression des données vous concernant.
                </p>
              </div>

              <div
                id="politique-cookies"
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-semibold">
                  5. Politique des Cookies
                </h3>
                <p className="text-text-secondary mb-4">
                  Ce site utilise des cookies pour améliorer votre expérience de
                  navigation. Les cookies sont de petits fichiers texte stockés
                  sur votre ordinateur qui nous permettent de :
                </p>
                <ul className="text-text-secondary list-inside list-disc space-y-2">
                  <li>Mémoriser vos préférences de navigation</li>
                  <li>
                    Analyser l'utilisation du site pour améliorer nos services
                  </li>
                  <li>Assurer la sécurité de votre session</li>
                </ul>
                <p className="text-text-secondary mt-4">
                  Vous pouvez à tout moment désactiver les cookies dans les
                  paramètres de votre navigateur. Cependant, cela pourrait
                  affecter certaines fonctionnalités du site.
                </p>
              </div>

              <div
                id="contact-legal"
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-semibold">6. Contact</h3>
                <p className="text-text-secondary">
                  Pour toute question concernant ces mentions légales, vous
                  pouvez me contacter via le{" "}
                  <ButtonUnderlineSecondaryHoveredPrimary
                    to="/#contact"
                    className="text-black"
                    onClick={() => {
                      setTimeout(() => {
                        const contactSection =
                          document.getElementById("contact");
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 100);
                    }}
                  >
                    formulaire de contact
                  </ButtonUnderlineSecondaryHoveredPrimary>{" "}
                  disponible sur ce site.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default Legal;
