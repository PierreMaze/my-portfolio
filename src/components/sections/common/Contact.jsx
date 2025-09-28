import { IoPaperPlane } from "react-icons/io5";
import { FadeIn } from "../../ui";

const Contact = () => {
  return (
    <section className="py-16 lg:py-24 xl:py-32">
      <FadeIn>
        <h2 className="relative text-3xl font-bold mb-12">
          <span className="relative inline-block">
            <span
              className="absolute block -skew-y-3 bg-orange-200 -inset-1"
              aria-hidden="true"></span>
            <span className="relative">Me contacter</span>
          </span>
        </h2>
      </FadeIn>

      <div className="grid gap-12 md:grid-cols-2">
        <FadeIn className="delay-100">
          <div className="space-y-8">
            <p className="text-basemd:text-lg text-text-secondary">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en
              discuter. Je suis toujours ouvert à de nouvelles opportunités et
              collaborations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-text-secondary">promazelaygue@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Localisation</h3>
                  <p className="text-text-secondary">Bordeaux, France</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="delay-200">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="px-4 py-2 w-full rounded ring-2 ring-zinc-300 focus:outline-none focus:ring-orange-600/50 focus:bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="px-4 py-2 w-full rounded ring-2 ring-zinc-300 focus:bg-white focus:outline-none focus:ring-orange-600/50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="px-4 py-2 w-full rounded ring-2 ring-zinc-300 focus:bg-white focus:outline-none focus:ring-orange-600/50"
                required></textarea>
            </div>
            <button
              type="submit"
              aria-label="Envoyer le message de contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-base font-medium text-white rounded transition-all duration-300 bg-orange-600 hover:bg-orange-700">
              <IoPaperPlane className="w-4 h-4" />
              Envoyer le message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
