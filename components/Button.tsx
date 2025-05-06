import { ReactNode } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  style?: React.CSSProperties;

}

const Button = ({className, onClick, type, children, style}: Props) => {

    return (
      <button
        type={type}
        onClick={onClick}
        style={style}
        className={`${className} text-white rounded-full transform transition hover:scale-110 duration-300 ease-in-out z-50`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;