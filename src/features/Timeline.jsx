import { FadeIn } from "../components/FadeIn";

const timelineData = [
  {
    date: "2025",
    title: "Site vitrine pour Signature",
    company: "client",
    description:
      "Création de site vitrine pour Signature, une entreprise de services de conseil et formation en ligne.",
  },
  {
    date: "2025",
    title: "Application d'extraction de donnés Excel",
    company: "Client",
    description:
      "Création d'une application web pour extraire des données Excel et les traité dans une base de données excel.",
  },
  {
    date: "2025",
    title: "Formation en continue",
    company: "Plateforme Web",
    description: "Perfectionnement en Typescript, Next.",
  },
  {
    date: "2024",
    title: "Site vitrine pour Clou & Cie",
    company: "Client",
    description:
      "Création d'un site vitrine pour Clou & Cie, une entreprise de services de conseil et formation en ligne.",
  },
  {
    date: "2024",
    title: "Site vitrine pour Luminescence33",
    company: "Client",
    description:
      "Création d'un site vitrine pour Luminescence33, une entreprise de services de conseil et formation en ligne.",
  },
  {
    date: "2024",
    title: "Formation en continue",
    company: "Plateforme Web",
    description:
      "Perfectionnement en React, Node, SQL et architecture de bases de données.",
  },
  {
    date: "2023",
    title: "Adoption de TailwindCSS",
    company: "Autodidact",
    description:
      "Maîtrise de nouvelles technologies front-end pour améliorer l'expérience utilisateur.",
  },
  {
    date: "2023",
    title: "Bac +2 Développeur Web Fullstack",
    company: "Wild Code School",
    description: "Formation spécialisation ReactJS et NodeJS.",
  },
  {
    date: "2022",
    title: "Début en développement web",
    company: "Autodidact",
    description: "Premiers pas avec HTML, CSS et JavaScript.",
  },
  {
    date: "2020",
    title: "CAP Paysagiste",
    company: "CFA de Blanquefort",
    description: "Premiers pas avec HTML, CSS et JavaScript.",
  },
  {
    date: "2016",
    title: "BAC Pro Restauration EU",
    company: "Lycée Condorcet d'Arcachon",
    description: "Premiers pas avec HTML, CSS et JavaScript.",
  },
];

export const Timeline = () => {
  return (
    <section className="py-20 bg-background-primary/50">
      <div className="container">
        <FadeIn>
          <h2 className="relative mb-16 text-3xl font-bold text-center">
            <span className="relative inline-block">
              <span
                className="absolute block -skew-y-3 bg-yellow-200 -inset-1"
                aria-hidden="true"></span>
              <span className="relative">Mon parcours</span>
            </span>
          </h2>
        </FadeIn>
        <div className="relative max-w-4xl mx-auto">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2" />

          {timelineData.map((item, index) => (
            <FadeIn key={item.date} className={`delay-[${index * 100}ms]`}>
              <div
                className={`relative md:mb-12 last:mb-0 ${
                  index % 2 === 0
                    ? "md:pr-[calc(50%+2rem)]"
                    : "md:pl-[calc(50%+2rem)]"
                }`}>
                {/* Point sur la ligne */}
                <div className="absolute z-10 w-4 h-4 -translate-x-1/2 border-2 border-yellow-500 rounded-full left-1/2 top-6 bg-background-primary" />

                {/* Contenu */}
                <div
                  className={`bg-white my-12 md:my-0 p-6 rounded-lg shadow-sm relative ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}>
                  {/* Flèche */}
                  <div
                    className={`absolute top-6 w-4 h-4 bg-white transform rotate-45 ${
                      index % 2 === 0 ? "right-[-8px]" : "left-[-8px]"
                    }`}
                  />

                  <div className="mb-2 font-semibold text-accent">
                    {item.date}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <h4 className="mb-2 text-sm italic">{item.company}</h4>
                  <p className="text-dark/70">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
