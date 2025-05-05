import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/libs/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "coral"
    | "blue"
    | "colorful"
    | "teal"
    | "purple"
    | "amber";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      default:
        "bg-coral text-white hover:bg-coral-dark dark:bg-coral-dark dark:hover:bg-coral",
      destructive:
        "bg-red-500 text-white hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600",
      outline:
        "border border-gray-300 bg-white hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700",
      secondary:
        "bg-blue-500 text-white hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500",
      ghost:
        "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100",
      link: "text-coral underline-offset-4 hover:underline dark:text-coral-light",
      coral:
        "bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:shadow-md dark:from-pink-600 dark:to-orange-600",
      blue: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-md dark:from-blue-600 dark:to-indigo-600",
      colorful:
        "relative text-white overflow-hidden bg-gradient-to-r hover:bg-gradient-to-l from-main-red to-main-blue hover:shadow-md dark:from-[#1084AB] dark:to-[#0C63BA] hover:from-[#1084AB] hover:to-[#0C63BA]",
      teal: "bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700",
      purple:
        "bg-purple-500 text-white hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700",
      amber:
        "bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700",
    };

    const sizeClasses = {
      default: "h-10 px-6 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    // For the colorful variant, wrap children in a span for z-index
    const content =
      variant === "colorful" ? (
        <span className="relative z-10 flex items-center justify-center">
          {children}
        </span>
      ) : (
        children
      );

    return (
      <Comp
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className // Mengizinkan className untuk menimpa style default
        )}
        ref={ref}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
