import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children?: ReactNode,
  disabled?: boolean,
  to?: string,
  type: "primary" | "small" | "secondary" | "round"
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function Button({ children, disabled, to, type, onClick }: ButtonProps) {
  const base = "text-sm inline-block bg-yellow-400 tracking-wide rounded-full font-semibold uppercase text-stone-800 hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    "primary": base + " px-4 py-3 md:px-6 md:py-4",
    "round": base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    "small": base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    "secondary": "text-sm px-4 py-2.5 md:px-6 md:py-3.5 inline-block border-2 border-stone-300 tracking-wide rounded-full font-semibold uppercase text-stone-500 hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
  };
  
  if (to) return (
    <Link to={to} className={styles[type]}>{children}</Link>
  )

  if (onClick) return (
    <button
      className={styles[type]}
      disabled={disabled}
      onClick={onClick}
    >
        {children}
    </button>
  )

  return (
    <button
      className={styles[type]}
      disabled={disabled}
    >
        {children}
    </button>
  )
}
