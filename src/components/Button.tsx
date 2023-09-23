import React from "react";
import styles from "../styles/style.module.css";
import { useRouter } from "next/router";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className?: string;
  specialStyle: boolean;
  isSpecialPage: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  className,
  specialStyle,
  isSpecialPage,
}) => {
  const location = useRouter();

  const isRegistered = location.pathname === "/Register";
  return (
    <button
      onClick={isSpecialPage ? onClick : undefined}
      className={
        isRegistered && specialStyle
          ? `${styles.gradientBorder} w-[96.35px] h-[31.35px] md:w-[172px] md:h-[53px] text-[12px] leading-[14px] md:text-[16px] md:leading-[19.5px] font-normal bg-gradient-to-r text-white`
          : `${styles.button} w-[96.35px] h-[31.35px] md:w-[172px] md:h-[53px] text-[12px] leading-[14px] md:text-[16px] md:leading-[19.5px] font-normal bg-gradient-to-r text-white ${className}`
      }
    >
      {text}
    </button>
  );
};

export default Button;
