"use client";

import { ButtonHTMLAttributes, forwardRef, useEffect, useRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../lib/utile";

const btnVariants = cva(
  "duration-400 transition-transform   hover:scale-105  focus:scale-105 active:scale-100 hover:disabled:scale-100",
  {
    variants: {
      variant: {
        fill: " bg-btn hover:bg-btn-hover disabled:bg-btn-muted active:bg-btn shadow-sm shadow-inherit active:shadow-inner",
        outline:
          " ring-solid ring-btn disabled:ring-btn-muted disabled:active:bg-transparent active:bg-btn disabled:text-gray-400  shadow-sm  shadow-inherit  ring-4 active:shadow-inner  disabled:ring-4",
        ghost:
          "  hover:bg-btn/80  active:bg-btn disabled:bg-gray-400 disabled:text-gray-500  shadow-sm shadow-inherit active:shadow-inner",
      },
      size: {
        sm: " px-2 py-1 ",
        md: " px-4 py-2 ",
        lg: " px-6 py-3 ",
      },
      shape: {
        pill: "rounded-full",
        circle: "rounded-full aspect-square",
      },
    },
    defaultVariants: {
      variant: "fill",
      size: "md",
      shape: "pill",
    },
  }
);
interface BtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof btnVariants> {
  onClick?: (val: any) => void;
  onToggle?: string;
  isToggled?: boolean;
  status?: string;
  hasStatus?: boolean;
  toggleDependencies?: unknown;
  children?: any;
}
const Btn = forwardRef<HTMLButtonElement, BtnProps>(
  (
    {
      onClick,
      onToggle,
      isToggled = undefined,
      status,
      hasStatus,
      toggleDependencies,
      children,
      className,
      variant,
      size,
      shape,
      ...props
    },
    ref
  ) => {
    const ele = useRef(null);
    ref = ele;
    useEffect(() => {
      if (onToggle == undefined || ele.current == undefined) return;
      const btnElement = ele.current as unknown as HTMLButtonElement;
      const classes = onToggle.split(" ").filter((item) => {
        return item != "";
      });
      const classToggler = () => {
        classes.map((str) => {
          btnElement.classList.toggle(str);
        });
      };
      classes.map((str) => {
        btnElement.classList.toggle(str, isToggled);
      });

      btnElement.addEventListener("click", classToggler);

      return () => {
        if (btnElement) {
          btnElement.removeEventListener("click", classToggler);
        }
      };
    }, [isToggled, onToggle, toggleDependencies]);

    return (
      <button
        ref={ele}
        onClick={(e) => {
          e.stopPropagation();
          if (typeof onClick == "function") {
            onClick({ isToggled, hasStatus });
          }
        }}
        className={cn(
          btnVariants({ variant, size,shape, className }),
          hasStatus && status 
        )}
        {...props}
      >
        {typeof children == "function"
          ? children({ isToggled, hasStatus })
          : children}
      </button>
    );
  }
);
Btn.displayName = "Btn";
export default Btn;
