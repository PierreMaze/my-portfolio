import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

// Fonction de sanitization pour nettoyer les inputs
const sanitizeInput = (value) => {
  return value
    .trim()
    .replace(/[<>]/g, "") // Supprime les balises HTML dangereuses
    .replace(/javascript:/gi, "") // Supprime les schémas javascript:
    .replace(/on\w+=/gi, ""); // Supprime les event handlers inline
};

export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  }, [errors]);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_STATE);
    setErrors({});
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};

    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const sendEmail = useCallback(async () => {
    setStatus("loading");
    setError(null);

    try {
      // Sanitization des données avant l'envoi
      const sanitizedData = {
        from_name: sanitizeInput(formData.name),
        reply_to: sanitizeInput(formData.email),
        message: sanitizeInput(formData.message),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        sanitizedData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      resetForm();
    } catch (err) {
      setStatus("error");
      setError(
        "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      );
    }
  }, [formData, resetForm]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (status === "loading") return;

      // Valider le formulaire avant l'envoi
      if (!validateForm()) {
        return;
      }

      sendEmail();
    },
    [sendEmail, status, validateForm],
  );

  return {
    formData,
    status,
    error,
    errors,
    handleChange,
    handleSubmit,
    setStatus,
  };
}
