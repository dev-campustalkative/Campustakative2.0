"use client";

import { IconType } from "react-icons";

interface Props {
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  className?: string;
  small?: boolean;
  large?: boolean;
  icon?: IconType;
}
const Button: React.FC<Props> = ({
  children,
  onClick,
  disabled,
  outline,
  className,
  small,
  large,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full
      ${
        outline
          ? " bg-transparent text-black border-[.7px] border-gray-300 "
          : " bg-[#F2AA3C] border-[#F2AA3C] text-[#050300] "
      }
      ${
        small
          ? " py-1 text-sm font-light border"
          : large
          ? " text-3xl font-semibold p-4"
          : "py-3 px-6 font-semibold text-base border-2 "
      } 
      
      ${className}`}
    >
      <p className="whitespace-nowrap">{children}</p>
      {Icon && <Icon size={18} className="" />}
    </button>
  );
};

export default Button;
