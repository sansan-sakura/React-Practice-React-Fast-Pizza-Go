import { Link } from "react-router-dom";
function Button({ children, disabled, to, types }) {
  const base =
    "bg-yellow-400 uppercase text-sm font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-100 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + "py-3 px-4 sm:px-6 sm:py-4 ",
    small: base + "py-2 px-4 md:px-5 md:py-2.5 text-xs",
    secondary:
      "bg-transparent text-sm uppercase border-2 border-stone-300 font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 sm:px-6 sm:py-3.5",
  };
  console.log(types);
  if (to)
    return (
      <Link to={to} className={styles[types]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[types]}>
      {children}
    </button>
  );
}

export default Button;
