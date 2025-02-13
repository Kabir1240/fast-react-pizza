import { Link } from "react-router-dom";

type ButtonProps = {
  children?: JSX.Element | string,
  disabled?: boolean,
  to?: string,
}

export default function Button({ children, disabled, to }: ButtonProps) {
  const className = "inline-block bg-yellow-400 px-4 py-3 tracking-wide rounded-full font-semibold uppercase text-stone-800 hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";
  if (to) return (
    <Link to={to} className={className}>{children}</Link>
  )

  return (
    <button
      className={className}
      disabled={disabled}
    >
        {children}
    </button>
  )
}
