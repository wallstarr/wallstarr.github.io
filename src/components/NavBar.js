import { Link, button } from "react-router-dom";

function NavBar({ toggle }) {
  return (
    <nav className="py-4 flex justify-between bg-customblack text-customwhite align-middle">
      <Link
        to="/"
        className="pl-7 animate-pulse font-mono font-bold text-2xl hover:text-customblue"
      >
        DB
      </Link>

      <div className="cursor-pointer md:hidden pr-6" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      <div className="pr-8 pt-1 md:block hidden font-sans font-semibold">
        <Link className="p-4 hover:underline" to="/about">
          About
        </Link>
        <Link className="p-4 hover:underline" to="/experience">
          Experience
        </Link>
        <Link className="p-4 hover:underline" to="/projects">
          Projects
        </Link>
        <Link className="p-4 hover:underline" to="/contact">
          Contact
        </Link>
        <button
          className="ml-3 border-b-2 border-customwhite font-bold animate-pulse text-customwhite hover:text-customyellow hover:border-customyellow"
          to="/resume"
        >
          Resume
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
