import { FadeIn } from "../components/FadeIn";

const Skills = () => {
  const skillsData = {
    "Langages & Frameworks": [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        description: "Langage dynamique incontournable du web",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "Bibliothèque JS pour UI rapides & dynamiques",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        description: "Exécution JS côté serveur, backend moderne",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        description: "Framework minimaliste pour APIs Node.js",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        description: "Gestion de styles avec utilitaires CSS modernes",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        description: "Framework React SSR et routage",
        bgWhite: true,
      },
    ],
    "Bases de données": [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        description: "Système de gestion de base relationnelle",
      },
      {
        name: "MariaDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
        description: "Base SQL open-source robuste et performante",
      },
      {
        name: "SQL",
        icon: "https://cdn-icons-png.flaticon.com/512/1533/1533827.png",
        description: "Conception et gestion de bases de données relationnelles",
      },
      {
        name: "BDD",
        icon: "https://cdn-icons-png.flaticon.com/512/1360/1360729.png",
        description: "Modélisation & gestion des données",
      },
    ],
    "Outils & Méthodes": [
      {
        name: "Notion",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
        description:
          "Plateforme collaborative pour gérer les tâches et documents",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        description: "Contrôle de version & collaboration sur code",
      },
      {
        name: "VPS",
        icon: "https://cdn-icons-png.flaticon.com/512/1006/1006547.png",
        description: "Déploiement et gestion de serveurs privés virtuels",
      },
      {
        name: "Figma",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
        description: "Conception et prototypage UI/UX",
      },
      {
        name: "Responsive Design",
        icon: "https://cdn-icons-png.flaticon.com/512/892/892515.png",
        description: "Design responsive pour tous types d'écrans",
      },
    ],
  };

  const SkillCard = ({ name, icon, description, bgWhite = false }) => (
    <div className="relative p-6 text-center bg-gray-100 rounded-xl transition-all duration-300 group hover:bg-accent/5">
      <div className="relative">
        <img
          src={icon}
          className={`mx-auto w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-110 ${
            bgWhite ? "bg-white rounded" : ""
          }`}
          alt={name}
        />
        <h4 className="font-semibold transition-colors duration-300 group-hover:text-accent">
          {name}
        </h4>
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-xl opacity-0 pointer-events-none transition-all duration-300 bg-white/95 group-hover:opacity-100 group-hover:pointer-events-auto">
        <p className="px-4 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );

  const SkillSection = ({ title, skills, cols = 6 }) => (
    <FadeIn>
      <div>
        <h3 className="pb-2 text-2xl font-semibold border-b mb-6 border-accent">
          {title}
        </h3>
        <div
          className={`grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-${cols}`}>
          {skills.map((skill, index) => (
            <SkillCard key={`${title}-${index}`} {...skill} />
          ))}
        </div>
      </div>
    </FadeIn>
  );

  return (
    <section className="py-20">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-accent mb-10">
            🛠 Compétences
          </h2>
        </FadeIn>
        <div className="space-y-16">
          {Object.entries(skillsData).map(([title, skills], index) => (
            <SkillSection
              key={title}
              title={title}
              skills={skills}
              cols={title === "Langages & Frameworks" ? 6 : 4}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
