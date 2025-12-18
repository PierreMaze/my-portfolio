import { FadeIn } from "../../../../components/ui/animation/index.jsx";
import { timelineData } from "../../../../data/timeline.data.js";

const Timeline = () => {
  return (
    <section className="py-16 lg:py-24 xl:py-32">
      <FadeIn>
        <h2 className="relative mb-16 text-center text-3xl font-bold">
          <span className="relative inline-block">
            <span
              className="absolute -inset-1 block -skew-y-3 bg-orange-200"
              aria-hidden="true"
            ></span>
            <span className="relative">Mon parcours</span>
          </span>
        </h2>
      </FadeIn>
      <div className="relative mx-auto max-w-4xl">
        {/* Ligne verticale centrale */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-zinc-300" />

        {timelineData.map((item, index) => (
          <FadeIn key={item.id}>
            <div
              className={`relative last:mb-0 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)]"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Point sur la ligne */}
              <div className="absolute -top-6 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-orange-600 md:top-6" />

              {/* Contenu */}
              <div
                className={`relative my-12 rounded bg-zinc-100 p-8 ring-2 ring-zinc-300 md:my-0 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                {/* Flèche */}
                <div
                  className={`absolute top-6 hidden h-4 w-4 rotate-45 transform bg-zinc-100 ring-zinc-300 md:block ${
                    index % 2 === 0
                      ? "right-[-8px] border-t-2 border-r-2 border-zinc-300"
                      : "left-[-8px] border-b-2 border-l-2 border-zinc-300"
                  }`}
                />

                <div className="mb-3 font-semibold text-orange-600">
                  {item.date}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-zinc-800">
                  {item.title}
                </h3>
                <h4 className="mb-4 text-sm text-zinc-600 italic">
                  {item.company}
                </h4>
                <p className="leading-relaxed text-zinc-700">
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
