import React from "react";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ type, className, onClick, children }: Props) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
