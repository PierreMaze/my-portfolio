import { useEffect, useState } from "react";
import { IoChevronForward } from "react-icons/io5";

export const TerminalLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);

  const loadSequence = [
    { text: "Initialisation du portfolio...", delay: 500 },
    { text: "Chargement des compétences...", delay: 800 },
    { text: "Configuration de l'interface...", delay: 600 },
    { text: "Prêt ! Bienvenue dans mon univers.", delay: 700 },
  ];

  useEffect(() => {
    let timeouts = [];
    let totalDelay = 0;

    loadSequence.forEach((step, index) => {
      totalDelay += step.delay;

      const timeout = setTimeout(() => {
        setTerminalOutput((prev) => [...prev, step.text]);

        if (index === loadSequence.length - 1) {
          const finalTimeout = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => setIsLoaded(true), 1000);
          }, 800);
          timeouts.push(finalTimeout);
        }
      }, totalDelay);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  if (!isLoaded) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-background-primary transition-all duration-1000 ${
          isExiting ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100"
        }`}
        style={{ fontFamily: "Inter, sans-serif" }}>
        <div className="px-6 mx-auto w-full max-w-2xl">
          <div
            className={`bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 ${
              isExiting ? "scale-95 opacity-0 blur-sm" : "scale-100 opacity-100"
            }`}>
            <div className="flex items-center gap-2 px-6 py-4 bg-gray-800">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFE799]"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-mono text-sm text-gray-400 ml-4">
                portfolio-loader
              </span>
            </div>

            <div className="p-8 font-mono">
              <div className="text-green-400 mb-4">
                <span className="text-blue-400">dev@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-white">$ npx create-portfolio</span>
              </div>

              <div className="text-gray-400 space-y-2">
                {terminalOutput.map((line, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <IoChevronForward className="w-3 h-3 text-[#5D7B8A]" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              {terminalOutput.length > 0 && (
                <div className="mt-4">
                  <div className="w-8 h-1 rounded animate-pulse bg-[#5D7B8A]"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes glitch {
            0% {
              transform: translate(0);
            }
            20% {
              transform: translate(-2px, 2px);
            }
            40% {
              transform: translate(-2px, -2px);
            }
            60% {
              transform: translate(2px, 2px);
            }
            80% {
              transform: translate(2px, -2px);
            }
            100% {
              transform: translate(0);
            }
          }

          .glitch {
            animation: glitch 0.3s infinite;
          }
        `}</style>
      </div>
    );
  }

  return null;
};
