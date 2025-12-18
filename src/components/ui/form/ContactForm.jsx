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
  const { formData, status, errors, setStatus, handleChange, handleSubmit } =
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
          className={`focus:ring-orange-500 w-full rounded bg-white px-4 py-2 ring-2 focus:outline-none ${
            errors.name ? "ring-red-500" : "ring-zinc-300"
          }`}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
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
          className={`focus:ring-orange-500 w-full rounded bg-white px-4 py-2 ring-2 focus:outline-none ${
            errors.email ? "ring-red-500" : "ring-zinc-300"
          }`}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
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
          className={`w-full rounded bg-white px-4 py-2 ring-2 focus:ring-orange-500 focus:outline-none ${
            errors.message ? "ring-red-500" : "ring-zinc-300"
          }`}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
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
