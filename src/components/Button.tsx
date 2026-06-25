import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type ButtonBaseProps = {
  variant?: "primary" | "outline" | "white" | "form";
};

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsAnchor = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", children, href, ...props }, ref) => {
    
    const baseStyles = "cursor-pointer inline-flex items-center justify-center uppercase tracking-widest text-sm transition-colors duration-300 font-semibold text-center";
    
    const variants = {
      primary: "bg-licht-gold text-white hover:bg-white hover:text-licht-dark px-8 py-4",
      outline: "border px-6 py-2 hover:bg-licht-gold hover:text-white hover:border-licht-gold",
      white: "bg-white/90 backdrop-blur text-licht-dark px-6 py-2 hover:bg-licht-gold hover:text-white font-medium",
      form: "bg-licht-gold text-white py-4 hover:bg-licht-dark w-full",
    };

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={clsx(baseStyles, variants[variant], className)}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={clsx(baseStyles, variants[variant], className)}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
