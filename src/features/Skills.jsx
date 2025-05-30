import { FadeIn } from "../components/FadeIn";

const Skills = () => {
  return (
    <section className="py-20">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-accent mb-10">
            🛠 Compétences
          </h2>
        </FadeIn>
        <div className="space-y-16">
          {/* Langages & Frameworks */}
          <FadeIn>
            <div>
              <h3 className="pb-2 text-2xl font-semibold border-b mb-6 border-accent">
                Langages & Frameworks
              </h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="JavaScript, langage dynamique incontournable du web.">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="JavaScript"
                  />
                  <h4 className="font-semibold">JavaScript</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Bibliothèque JS pour UI rapides & dynamiques.">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="React"
                  />
                  <h4 className="font-semibold">React</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Exécution JS côté serveur, backend moderne.">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="Node.js"
                  />
                  <h4 className="font-semibold">Node.js</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Framework minimaliste pour APIs Node.js.">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="Express"
                  />
                  <h4 className="font-semibold">Express</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Gestion de styles avec utilitaires CSS modernes.">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="TailwindCSS"
                  />
                  <h4 className="font-semibold">TailwindCSS</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Framework React SSR et routage.">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    className="mx-auto w-12 h-12 bg-white rounded mb-2"
                    alt="Next.js"
                  />
                  <h4 className="font-semibold">Next.js</h4>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Bases de données */}
          <FadeIn>
            <div>
              <h3 className="pb-2 text-2xl font-semibold border-b mb-6 border-accent">
                Bases de données
              </h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Système de gestion de base relationnelle.">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="PostgreSQL"
                  />
                  <h4 className="font-semibold">PostgreSQL</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Base SQL open-source robuste et performante.">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="MariaDB"
                  />
                  <h4 className="font-semibold">MariaDB</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Conception et gestion de bases de données relationnelles.">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1533/1533827.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="SQL"
                  />
                  <h4 className="font-semibold">SQL</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Modélisation & gestion des données.">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1360/1360729.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="BDD"
                  />
                  <h4 className="font-semibold">BDD</h4>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Outils & Méthodes */}
          <FadeIn>
            <div>
              <h3 className="pb-2 text-2xl font-semibold border-b mb-6 border-accent">
                Outils & Méthodes
              </h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Plateforme collaborative pour gérer les tâches et documents.">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="Notion"
                  />
                  <h4 className="font-semibold">Notion</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Contrôle de version & collaboration sur code.">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="GitHub"
                  />
                  <h4 className="font-semibold">GitHub</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Déploiement et gestion de serveurs privés virtuels.">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1006/1006547.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="VPS"
                  />
                  <h4 className="font-semibold">VPS</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Conception et prototypage UI/UX.">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="Figma"
                  />
                  <h4 className="font-semibold">Figma</h4>
                </div>
                <div
                  className="p-6 text-center bg-gray-100 rounded-xl card-skill"
                  title="Design responsive pour tous types d'écrans.">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/892/892515.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="Responsive Design"
                  />
                  <h4 className="font-semibold">Responsive Design</h4>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Skills;
