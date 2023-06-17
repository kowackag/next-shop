import React from "react";

interface MainButtonProps {
  type: "button" | "submit";
  onClick: () => void;
  children: React.ReactNode;
}
export const MainButton = ({ type, onClick, children }: MainButtonProps) => {
  return (
    <button
      type={type === "button" ? "button" : "submit"}
      onClick={onClick}
      className="block rounded bg-sky-700 px-5 py-3 text-sm font-medium text-white opacity-80 hover:opacity-100 transition-opacity duration-500"
    >
      {children}
    </button>
  );
};
