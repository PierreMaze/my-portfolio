import { FadeIn } from "../components/FadeIn";

const Legal = () => {
  return (
    <div className="py-20">
      <div className="container">
        <FadeIn>
          <h1 className="text-4xl font-bold text-center mb-8">
            Mentions Légales
          </h1>
        </FadeIn>

        <div className="mx-auto max-w-3xl">
          <FadeIn className="delay-100">
            <div className="mx-auto prose prose-lg">
              <h2>1. Informations Légales</h2>
              <p>
                Ce site est édité par [Votre Nom], développeur web indépendant.
              </p>

              <h2>2. Hébergement</h2>
              <p>
                Ce site est hébergé par Netlify, Inc. 2325 3rd Street, Suite
                296, San Francisco, CA 94107, États-Unis.
              </p>

              <h2>3. Propriété Intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>

              <h2>4. Protection des Données Personnelles</h2>
              <p>
                Conformément à la loi "Informatique et Libertés" du 6 janvier
                1978 modifiée, et au Règlement Général sur la Protection des
                Données (RGPD), vous disposez d'un droit d'accès, de
                rectification et de suppression des données vous concernant.
              </p>

              <h2>5. Contact</h2>
              <p>
                Pour toute question concernant ces mentions légales, vous pouvez
                me contacter à [votre email].
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Legal;
