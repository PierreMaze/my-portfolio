import { FadeIn } from "../components/FadeIn";

export const About = () => {
  return (
    <div className="py-20">
      <div className="container">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-8 text-center">À propos</h1>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn className="delay-100">
            <div className="prose prose-lg mx-auto mb-12">
              <p className="text-dark/70">
                Développeur Fullstack passionné avec plus de 4 ans d'expérience
                dans le développement web. Je me spécialise dans la création
                d'applications web modernes et performantes en utilisant les
                dernières technologies du web.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="delay-200">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Ma Mission</h2>
                <p className="text-dark/70">
                  Créer des solutions web innovantes qui répondent aux besoins
                  des utilisateurs tout en maintenant les meilleures pratiques
                  de développement et de performance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Mes Valeurs</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Qualité et excellence
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Innovation continue
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Collaboration efficace
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="delay-300">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Pourquoi me choisir ?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Expertise Technique</h3>
                  <p className="text-dark/70 text-sm">
                    Maîtrise des technologies modernes et des meilleures
                    pratiques de développement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Approche Pragmatique</h3>
                  <p className="text-dark/70 text-sm">
                    Solutions concrètes et efficaces adaptées à vos besoins
                    spécifiques.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Communication Claire</h3>
                  <p className="text-dark/70 text-sm">
                    Échanges transparents et suivi régulier de l'avancement des
                    projets.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
