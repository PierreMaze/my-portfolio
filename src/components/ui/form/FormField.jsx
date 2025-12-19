import PropTypes from "prop-types";

/**
 * Composant FormField réutilisable pour inputs et textarea
 * Encapsule label, input/textarea, et messages d'erreur
 */
const FormField = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  rows,
  className = "",
}) => {
  const isTextarea = type === "textarea";
  const InputComponent = isTextarea ? "textarea" : "input";

  const inputProps = {
    id,
    name,
    type: isTextarea ? undefined : type,
    required,
    value,
    onChange,
    rows: isTextarea ? rows : undefined,
    className: `focus:ring-orange-700 w-full rounded bg-white px-4 py-2 ring-2 focus:outline-none ${
      error ? "ring-red-500" : "ring-zinc-300"
    } ${className}`,
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": error ? `${id}-error` : undefined,
  };

  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-medium">
        {label}
      </label>
      <InputComponent {...inputProps} />
      {error && (
        <p id={`${id}-error`} className="fint-medium mt-1 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "textarea"]),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  className: PropTypes.string,
};

export default FormField;
