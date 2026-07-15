import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none group",
          {
            "bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]": variant === "primary",
            "bg-white/10 text-white backdrop-blur-md hover:bg-white/20 border border-white/20": variant === "secondary",
            "border border-white/20 text-white hover:bg-white/10": variant === "outline",
            "text-muted-foreground hover:text-white hover:bg-white/5": variant === "ghost",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === "primary" && (
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
