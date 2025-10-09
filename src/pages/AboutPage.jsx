import { Container } from "../components/layout/Container";
import { ButtonRectangularPrimary, FadeIn } from "../components/ui";
import { useMeta } from "../hooks";

const About = () => {
  // SEO dynamique unifié
  useMeta({
    title: "À propos",
    description:
      "Découvrez le parcours et l'expertise de Pierre Mazelaygue, développeur Fullstack passionné par la création d'expériences web modernes.",
    keywords:
      "à propos, Pierre Mazelaygue, développeur, parcours, expertise, fullstack",
    ogTitle: "À propos - MAZE Web.",
    ogDescription:
      "Découvrez le parcours et l'expertise d'un développeur Fullstack passionné",
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
          <h2 className="relative text-3xl font-bold mb-12">
            <span className="relative inline-block">
              <span
                className="absolute block -skew-y-3 bg-orange-200 -inset-1"
                aria-hidden="true"></span>
              <span className="relative">À propos</span>
            </span>
          </h2>
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn className="delay-100">
            <div className="space-y-6">
              <p className="text-lg text-black">
                Je me nomme Pierre MAZELAYGUE, j'ai 28 ans. Développeur
                Fullstack passionné par la création d'expériences web modernes
                et performantes. Je combine expertise technique et sens du
                design pour construire des applications qui allient esthétique
                et fonctionnalité.
              </p>
              <p className="text-lg text-black">
                Mon approche se concentre sur l'expérience utilisateur, la
                performance et la maintenabilité du code. Je m'efforce de créer
                des solutions élégantes qui répondent aux besoins des
                utilisateurs tout en restant techniquement robustes.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="delay-200">
            <div className="space-y-6">
              <div className="p-6 bg-white rounded shadow-sm ring-2 ring-zinc-200">
                <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    <span>
                      Développement Frontend avec React et TailwindCSS
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    <span>Architecture Backend avec Node.js et PostgreSQL</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    <span>Optimisation des performances et SEO</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    <span>Design d'interface utilisateur et UX</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default About;
