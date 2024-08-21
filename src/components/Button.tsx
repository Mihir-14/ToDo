import React from "react";
interface props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
