// /src/components/ui/form/ContactForm.jsx
import { useEffect } from "react";
import { IoPaperPlane, IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useContactForm } from "../../../hooks/form/useContactForm";

const STATUS_CONFIG = {
  idle: {
    text: "Envoyer le message",
    icon: <IoPaperPlane className="w-5 h-5 transition-transform duration-300" aria-hidden="true" />,
    color: "bg-orange-600 hover:bg-orange-700",
  },
  loading: {
    text: "Envoi...",
    icon: <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" aria-hidden="true" />,
    color: "bg-orange-600",
  },
  success: {
    text: "Envoyé",
    icon: <IoCheckmarkCircle className="w-5 h-5 scale-110 text-white transition-transform duration-300" aria-hidden="true" />,
    color: "bg-green-600 hover:bg-green-700",
  },
  error: {
    text: "Erreur",
    icon: <IoCloseCircle className="w-5 h-5 scale-110 text-white transition-transform duration-300" aria-hidden="true" />,
    color: "bg-red-600 hover:bg-red-700",
  },
};

const ContactForm = () => {
  const { formData, status, setStatus, handleChange, handleSubmit } = useContactForm();

  const isLoading = status === "loading";
  const currentStatus = STATUS_CONFIG[status] || STATUS_CONFIG.idle;

  // Reset button after 2 seconds on success or error
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status, setStatus]);
  
  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="block font-medium mb-2">Nom</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 w-full rounded ring-2 ring-zinc-300 focus:outline-none focus:ring-orange-600/50 focus:bg-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium mb-2">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 w-full rounded ring-2 ring-zinc-300 focus:outline-none focus:ring-orange-600/50 focus:bg-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-2 w-full rounded ring-2 ring-zinc-300 focus:outline-none focus:ring-orange-600/50 focus:bg-white"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        aria-busy={isLoading}
        className={`
          relative inline-flex items-center justify-center gap-2 px-4 py-2 w-full md:max-w-64
          text-base font-medium text-white rounded transition-all duration-300
          ${currentStatus.color} disabled:opacity-60 disabled:cursor-not-allowed
        `}
      >
        {currentStatus.icon}
        <span className="transition-all duration-300">
          {currentStatus.text}
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
