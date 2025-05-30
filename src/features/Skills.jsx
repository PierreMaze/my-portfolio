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
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="JavaScript"
                  />
                  <h4 className="font-semibold">JavaScript</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Langage dynamique incontournable du web
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="React"
                  />
                  <h4 className="font-semibold">React</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Bibliothèque JS pour UI rapides & dynamiques
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="Node.js"
                  />
                  <h4 className="font-semibold">Node.js</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Exécution JS côté serveur, backend moderne
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="Express"
                  />
                  <h4 className="font-semibold">Express</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Framework minimaliste pour APIs Node.js
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="TailwindCSS"
                  />
                  <h4 className="font-semibold">TailwindCSS</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Gestion de styles avec utilitaires CSS modernes
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    className="mx-auto w-12 h-12 bg-white rounded mb-2"
                    alt="Next.js"
                  />
                  <h4 className="font-semibold">Next.js</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Framework React SSR et routage
                    </p>
                  </div>
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
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="PostgreSQL"
                  />
                  <h4 className="font-semibold">PostgreSQL</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Système de gestion de base relationnelle
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="MariaDB"
                  />
                  <h4 className="font-semibold">MariaDB</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Base SQL open-source robuste et performante
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1533/1533827.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="SQL"
                  />
                  <h4 className="font-semibold">SQL</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Conception et gestion de bases de données relationnelles
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1360/1360729.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="BDD"
                  />
                  <h4 className="font-semibold">BDD</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Modélisation & gestion des données
                    </p>
                  </div>
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
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="Notion"
                  />
                  <h4 className="font-semibold">Notion</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Plateforme collaborative pour gérer les tâches et
                      documents
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="GitHub"
                  />
                  <h4 className="font-semibold">GitHub</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Contrôle de version & collaboration sur code
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1006/1006547.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="VPS"
                  />
                  <h4 className="font-semibold">VPS</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Déploiement et gestion de serveurs privés virtuels
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="Figma"
                  />
                  <h4 className="font-semibold">Figma</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Conception et prototypage UI/UX
                    </p>
                  </div>
                </div>
                <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group card-skill hover:shadow-lg">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/892/892515.png"
                    className="mx-auto w-12 h-12 mb-2"
                    alt="Responsive Design"
                  />
                  <h4 className="font-semibold">Responsive Design</h4>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-sm text-gray-600 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Design responsive pour tous types d'écrans
                    </p>
                  </div>
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
