import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white" | "form";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    
    const baseStyles = "cursor-pointer inline-flex items-center justify-center uppercase tracking-widest text-sm transition-colors duration-300 font-semibold text-center";
    
    const variants = {
      primary: "bg-licht-gold text-white hover:bg-white hover:text-licht-dark px-8 py-4",
      outline: "border px-6 py-2 hover:bg-licht-gold hover:text-white hover:border-licht-gold",
      white: "bg-white/90 backdrop-blur text-licht-dark px-6 py-2 hover:bg-licht-gold hover:text-white font-medium",
      form: "bg-licht-gold text-white py-4 hover:bg-licht-dark w-full",
    };

    return (
      <button
        ref={ref}
        className={clsx(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
