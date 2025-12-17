import { FadeIn } from "../../../../components/ui/animation/index.jsx";
import { StackTag } from "../../../../components/ui/tags/index.jsx";
import * as constants from "../../../../constants";
import { useStacksData } from "../../../../hooks";

const Skills = () => {
  // Utilisation du hook personnalisé pour gérer les données des stacks
  const { stacksByCategory } = useStacksData();

  return (
    <section className="py-16 lg:py-24 xl:py-32">
      <FadeIn>
        <h2 className="relative mb-12 text-3xl font-bold">
          <span className="relative inline-block">
            <span
              className="absolute -inset-1 block -skew-y-3 bg-orange-200"
              aria-hidden="true"
            ></span>
            <span className="relative">Mes compétences</span>
          </span>
        </h2>
      </FadeIn>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(stacksByCategory).map(([title, stacks]) => (
          <FadeIn key={title}>
            <div className="mx-4 py-4">
              <h3 className="mb-4 flex items-center gap-2 text-start text-lg font-semibold text-stone-800">
                <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                {title}
              </h3>
              <ul
                className="flex list-none flex-wrap gap-2"
                aria-label={`Compétences en ${title}`}
              >
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
