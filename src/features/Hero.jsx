import { Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-20">
      <div className="container">
        <FadeIn>
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              Développeur
              <span className="relative inline-block ml-4">
                <span
                  className="absolute block -skew-y-3 bg-yellow-200 -inset-1"
                  aria-hidden="true"></span>
                <span className="relative">Fullstack</span>
              </span>
            </h1>

            {/* Avatar et liens sociaux */}
            <div className="flex items-center justify-between pb-4 mb-4">
              <a href="/about" className="flex-shrink-0 w-16 h-16">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  alt="Mon avatar"
                  className="object-cover w-full h-full transition-transform rounded-full hover:scale-105"
                  width="64"
                  height="64"
                />
              </a>
              <div className="w-full mx-4 border-t border-black/10"></div>
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/votre-profil"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 transition-transform hover:rotate-12">
                  <svg
                    className="transition-colors hover:text-purple-600"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.0001 1C7.16463 1 0 8.08236 0 16.8192C0 23.8085 4.5845 29.7382 10.9419 31.8299C11.7415 31.9764 12.0351 31.4867 12.0351 31.0689C12.0351 30.6917 12.0201 29.4456 12.0134 28.1238C7.56213 29.0806 6.62288 26.2573 6.62288 26.2573C5.895 24.4289 4.84625 23.9425 4.84625 23.9425C3.39463 22.9608 4.95575 22.981 4.95575 22.981C6.56237 23.0925 7.40837 24.6111 7.40837 24.6111C8.8355 27.0295 11.1515 26.3304 12.0645 25.9261C12.2081 24.9038 12.6227 24.2058 13.0804 23.8108C9.5265 23.4109 5.79063 22.0544 5.79063 15.993C5.79063 14.2659 6.41563 12.8546 7.43913 11.7468C7.273 11.3484 6.72537 9.73952 7.59412 7.56045C7.59412 7.56045 8.93775 7.13531 11.9954 9.18203C13.2716 8.83153 14.6404 8.65579 16.0001 8.64974C17.3599 8.65579 18.7298 8.83141 20.0084 9.18203C23.0623 7.13544 24.404 7.56057 24.404 7.56057C25.2749 9.7394 24.727 11.3485 24.5609 11.7468C25.5867 12.8546 26.2075 14.2659 26.2075 15.993C26.2075 22.0689 22.4645 23.4067 18.9016 23.7983C19.4755 24.2892 19.9869 25.2519 19.9869 26.7278C19.9869 28.8443 19.9684 30.5479 19.9684 31.0689C19.9684 31.49 20.2564 31.9832 21.0674 31.8277C27.4213 29.7338 32 23.8062 32 16.8193C32 8.08235 24.8364 1 16.0001 1Z"
                      strokeWidth="0.3"
                      className="stroke-current"
                    />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/votre-profil"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 transition-transform hover:rotate-12">
                  <svg
                    className="transition-colors hover:text-blue-600"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25.856 25.8613H21.7085V19.3635C21.7085 17.813 21.677 15.8197 19.549 15.8197C17.3877 15.8197 17.057 17.5068 17.057 19.2498V25.8613H12.9095V12.5H16.8925V14.32H16.945C17.5015 13.27 18.856 12.1623 20.8772 12.1623C25.0772 12.1623 25.856 14.9273 25.856 18.527V25.856V25.8613ZM8.2265 10.6712C6.893 10.6712 5.8185 9.5915 5.8185 8.2615C5.8185 6.935 6.893 5.85525 8.2265 5.85525C9.5565 5.85525 10.6345 6.935 10.6345 8.2615C10.6345 9.5915 9.55475 10.6712 8.2265 10.6712ZM10.3055 25.8613H6.1475V12.5H10.3055V25.8613ZM27.928 2H4.065C2.924 2 2 2.903 2 4.01775V27.9823C2 29.097 2.924 30 4.065 30H27.9262C29.0672 30 30 29.097 30 27.9823V4.01775C30 2.903 29.0672 2 27.9262 2H27.928Z"
                      strokeWidth="0.3"
                      className="stroke-current"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <p className="mb-8 text-xl text-dark/70">
              Je crée des applications web modernes et performantes avec React,
              Node.js et TailwindCSS.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-white transition-colors rounded-lg bg-accent hover:bg-accent/90">
              Me contacter
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
