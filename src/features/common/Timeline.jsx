import { FadeIn } from "../../components/ui/FadeIn";

const timelineData = [
  {
    id: "2024-1",
    date: "2024 - 2025",
    title: "Création de site web et landig pages",
    company: "Free",
    description:
      "Création de site web et landing pages pour des clients, charte graphique et développement de l'interface utilisateur.",
  },
  {
    id: "2023-1",
    date: "2023",
    title: "Bac +2 Développeur Web Fullstack",
    company: "Wild Code School",
    description: "Formation spécialisation ReactJS et NodeJS.",
  },
  {
    id: "2022-1",
    date: "2022",
    title: "Début en développement web",
    company: "Autodidact",
    description: "Premiers pas avec HTML, CSS et JavaScript.",
  },
  {
    id: "2020-1",
    date: "2020",
    title: "CAP Jardinier Paysagiste",
    company: "CFA de Blanquefort",
    description: "Diplôme de CAP Jardinier Paysagiste.",
  },
  {
    id: "2016-1",
    date: "2016",
    title: "BAC Pro Restauration EU",
    company: "Lycée Condorcet d'Arcachon",
    description: "Diplôme de Bac Pro EU en Hôtellerie et Restauration.",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-background-primary/50">
      <FadeIn>
        <h2 className="relative text-3xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span
              className="absolute block -skew-y-3 bg-yellow-200 -inset-1"
              aria-hidden="true"></span>
            <span className="relative">Mon parcours</span>
          </span>
        </h2>
      </FadeIn>
      <div className="relative mx-auto max-w-4xl">
        {/* Ligne verticale centrale */}
        <div className="absolute top-0 bottom-0 w-0.5 left-1/2 bg-accent/20 -translate-x-1/2" />

        {timelineData.map((item, index) => (
          <FadeIn key={item.id} className={`delay-[${index*100}ms]`}>
            <div
              className={`relative md:mb-16 last:mb-0 ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)]"
                  : "md:pl-[calc(50%+2rem)]"}`}>
              {/* Point sur la ligne */}
              <div className="absolute z-10 w-4 h-4 border-2 rounded-full -translate-x-1/2 border-yellow-500 left-1/2 -top-6 md:top-6 bg-background-primary" />

              {/* Contenu */}
              <div
                className={`bg-accent-50 my-12 md:my-0 p-8 rounded-lg shadow-sm relative ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                {/* Flèche */}
                <div
                  className={`hidden md:block absolute top-6 w-4 h-4 bg-accent-50 transform rotate-45 ${
                    index % 2 === 0 ? "right-[-8px]" : "left-[-8px]"}`}
                />

                <div className="font-semibold mb-3 text-accent">
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <h4 className="text-sm mb-4 italic">{item.company}</h4>
                <p className="leading-relaxed text-dark/70">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
