// /src/components/ui/form/ContactForm.jsx
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoPaperPlane,
} from "react-icons/io5";
import { useContactForm } from "../../../hooks/form/useContactForm";
import { Button } from "../buttons";

const STATUS_CONFIG = {
  idle: {
    text: "Envoyer le message",
    icon: (
      <IoPaperPlane
        className="h-5 w-5 transition-transform duration-300"
        aria-hidden="true"
      />
    ),
    color: "bg-orange-600 hover:bg-orange-700",
  },
  loading: {
    text: "Envoi...",
    icon: (
      <AiOutlineLoading3Quarters
        className="h-5 w-5 animate-spin"
        aria-hidden="true"
      />
    ),
    color: "bg-orange-600",
  },
  success: {
    text: "Envoyé",
    icon: (
      <IoCheckmarkCircle
        className="h-5 w-5 scale-110 text-white transition-transform duration-300"
        aria-hidden="true"
      />
    ),
    color: "bg-green-600 hover:bg-green-700",
  },
  error: {
    text: "Erreur",
    icon: (
      <IoCloseCircle
        className="h-5 w-5 scale-110 text-white transition-transform duration-300"
        aria-hidden="true"
      />
    ),
    color: "bg-red-600 hover:bg-red-700",
  },
};

const ContactForm = () => {
  const { formData, status, setStatus, handleChange, handleSubmit } =
    useContactForm();

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
        <label htmlFor="name" className="mb-2 block font-medium">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded px-4 py-2 ring-2 ring-zinc-300 focus:bg-white focus:ring-orange-600/50 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded px-4 py-2 ring-2 ring-zinc-300 focus:bg-white focus:ring-orange-600/50 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded px-4 py-2 ring-2 ring-zinc-300 focus:bg-white focus:ring-orange-600/50 focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        status={status}
        isLoading={isLoading}
        iconLeft={currentStatus.icon}
        fullWidth
        className="text-white md:max-w-64"
      >
        {currentStatus.text}
      </Button>
    </form>
  );
};

export default ContactForm;
