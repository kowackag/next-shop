import React from "react";
interface FormInputProps {
  id: string;
  type: string;
  error: string;
  isValid: boolean;
  touched: boolean | undefined;
  register: any;
  label: string;
  placeholder?: string;
  autoComplete?: string;
}
export const FormInput = ({
  id,
  type,
  label,
  error,
  register,
  isValid,
  touched,
  placeholder,
  autoComplete,
}: FormInputProps) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`block text-sm font-medium pt-2 text-gray-700 ${
          !isValid && touched && "text-red-700"
        }`}
      >
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id)}
        autoComplete={autoComplete}
        className={`mt-1 w-full py-1 px-2 rounded-sm ${
          !touched
            ? "border-gray-200 border-solid border-2"
            : isValid
            ? "border-sky-700 border-solid border-2"
            : "border-red-700 border-solid border-2"
        }   shadow-sm sm:text-sm `}
        aria-invalid={error ? "true" : "false"}
      />
      {!isValid && touched && (
        <span
          role="alert"
          className="absolute bottom-[-14px] left-0 text-red-700 italic text-xs"
        >
          {error}
        </span>
      )}
    </div>
  );
};
