import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_STATE);
  }, []);

  const sendEmail = useCallback(async () => {
    setStatus("loading");
    setError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      resetForm();
    } catch (err) {
      setStatus("error");
      setError(
        "Une erreur est survenue lors de l’envoi du message. Veuillez réessayer.",
      );
    }
  }, [formData, resetForm]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (status === "loading") return;

      sendEmail();
    },
    [sendEmail, status],
  );

  return {
    formData,
    status,
    error,
    handleChange,
    handleSubmit,
    setStatus,
  };
}
