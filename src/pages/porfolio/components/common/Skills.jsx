import { FadeIn, StackTag } from "../../../../components/ui";
import * as constants from "../../../../constants";
import { useStacksData } from "../../../../hooks";

const Skills = () => {
  // Utilisation du hook personnalisé pour gérer les données des stacks
  const { stacksByCategory } = useStacksData();

  return (
    <section className="py-16 lg:py-24 xl:py-32">
      <FadeIn>
        <h2 className="relative text-3xl font-bold mb-12">
          <span className="relative inline-block">
            <span
              className="absolute block -skew-y-3 bg-orange-200 -inset-1"
              aria-hidden="true"></span>
            <span className="relative">Mes compétences</span>
          </span>
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {Object.entries(stacksByCategory).map(([title, stacks]) => (
          <FadeIn key={title}>
            <div className="py-4 mx-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-start text-stone-800 mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                {title}
              </h3>
              <ul
                className="flex flex-wrap gap-2 list-none"
                aria-label={`Compétences en ${title}`}>
                {stacks.map((stack, index) => (
                  <li key={`${title}-${index}`}>
                    <StackTag
                      name={stack.name}
                      type={constants.STACK_TAG_TYPES.RECTANGULAR}
                      icon={stack.icon}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Skills;
