import { FadeIn } from "../components/FadeIn";

const timelineData = [
  {
    year: "2024",
    title: "Développeur Fullstack Senior",
    company: "Aos",
    description:
      "Développement d'applications web complexes pour des clients internationaux.",
  },
  {
    year: "2022",
    title: "Adoption de React et TailwindCSS",
    company: "Autodidact",
    description:
      "Maîtrise de nouvelles technologies front-end pour améliorer l'expérience utilisateur.",
  },
  {
    year: "2021",
    title: "Spécialisation Backend",
    company: "Wild Code School",
    description:
      "Perfectionnement en Node.js, SQL et architecture de bases de données.",
  },
  {
    year: "2020",
    title: "Début en développement web",
    company: "Wild Code School",
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
            <FadeIn key={item.year} className={`delay-[${index * 100}ms]`}>
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
                    {item.year}
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
