import { Container } from "../components/layout/Container";
import { FadeIn } from "../components/ui/FadeIn";

const About = () => {
  return (
    <section className="py-20">
      <Container>
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
              <p className="text-lg text-text-secondary">
                Je me nomme Pierre MAZELAYGUE, j'ai 28 ans. Développeur
                Fullstack passionné par la création d'expériences web modernes
                et performantes. Je combine expertise technique et sens du
                design pour construire des applications qui allient esthétique
                et fonctionnalité.
              </p>
              <p className="text-lg text-text-secondary">
                Mon approche se concentre sur l'expérience utilisateur, la
                performance et la maintenabilité du code. Je m'efforce de créer
                des solutions élégantes qui répondent aux besoins des
                utilisateurs tout en restant techniquement robustes.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="delay-200">
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>
                      Développement Frontend avec React et TailwindCSS
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Architecture Backend avec Node.js et PostgreSQL</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Optimisation des performances et SEO</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
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
