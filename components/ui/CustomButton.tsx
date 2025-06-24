import Link from "next/link";
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

// Combine our custom props with native button/anchor props
type ButtonProps = {
  variant?: "gradient" | "solid" | "outline";
  href?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);

const Button = ({
  variant = "gradient",
  href,
  fullWidth,
  children,
  ...props
}: ButtonProps) => {
  // Base classes common to all buttons
  const baseClasses = `px-5 py-2 rounded-full font-medium transition-all duration-200 text-center ${
    fullWidth ? "w-full" : ""
  } ${props.className || ""}`;

  // Variant-specific classes
  const variantClasses = {
    gradient:
      "bg-gradient-to-r from-[#5A66FF] to-cyan-500 text-white shadow-md hover:shadow-lg hover:opacity-90",
    solid:
      "bg-[#5A66FF] text-white shadow-md hover:shadow-lg hover:bg-cyan-500 border border-transparent",
    outline:
      "border-2 border-[#5A66FF] text-[#5A66FF] bg-transparent hover:bg-[#5A66FF] hover:text-white",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]}`;

  // Remove className from props to avoid duplication
  const { className, ...restProps } = props;

  return href ? (
    <Link
      href={href}
      className={buttonClasses}
      {...(restProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </Link>
  ) : (
    <button
      className={buttonClasses}
      {...(restProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
