import { FadeIn } from "../components/FadeIn";
import { Button } from "../components/ui/Button";

const Contact = () => {
  return (
    <section className="py-20">
      <FadeIn>
        <h2 className="relative text-3xl font-bold mb-12">
          <span className="relative inline-block">
            <span
              className="absolute block -skew-y-3 bg-yellow-200 -inset-1"
              aria-hidden="true"></span>
            <span className="relative">Me contacter</span>
          </span>
        </h2>
      </FadeIn>

      <div className="grid gap-12 md:grid-cols-2">
        <FadeIn className="delay-100">
          <div className="space-y-6">
            <p className="text-lg text-text-secondary">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en
              discuter. Je suis toujours ouvert à de nouvelles opportunités et
              collaborations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                  <svg
                    className="w-6 h-6 text-accent"
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
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                  <svg
                    className="w-6 h-6 text-accent"
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
                className="px-4 py-2 w-full border rounded-lg border-accent-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent focus:bg-white"
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
                className="px-4 py-2 w-full border rounded-lg border-accent-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent"
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
                className="px-4 py-2 w-full border rounded-lg border-accent-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent"
                required></textarea>
            </div>
            <Button type="submit">Envoyer le message</Button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
