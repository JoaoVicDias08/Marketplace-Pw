import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  to?: string; // id da seção para navegação
}

export default function Button({ children, to, className = "", ...props }: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (to) {
      e.preventDefault();
      const section = document.getElementById(to);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (props.onClick) props.onClick(e);
  };

  return (
    <button
      className={`px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}