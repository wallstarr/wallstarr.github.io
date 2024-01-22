import { Link} from "react-router-dom";

function NavBar({ toggle }) {
  return (
    <nav className="relative py-4 flex justify-between bg-customblack text-customwhite align-middle z-10">
      <Link
        to="/"
        className="pl-7 animate-pulse font-mono font-bold text-2xl hover:text-customyellow transition ease-out duration-1000"
      >
        DB
      </Link>

      <div className="cursor-pointer md:hidden pr-6" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      <div className="pr-8 pt-1 md:block hidden font-sans font-semibold">
        <a className="p-5 animate-slideIn1 opacity-0 hover:underline" href="#about">
          About
        </a>
        <a className="p-5 animate-slideIn3 opacity-0 hover:underline" href="#projects">
          Projects
        </a>
        <a className="p-5 animate-slideIn2 opacity-0 hover:underline" href="#experience">
          Experience
        </a>
        <a className="p-5 animate-slideIn4 opacity-0 hover:underline" href="#contact">
          Contact
        </a>
        <a
          className="ml-5 animate-slideIn5 opacity-0 border-b-2 border-customwhite font-bold text-customwhite hover:text-customyellow hover:border-customyellow transition ease-out duration-500"
          href="https://drive.google.com/file/d/14-VoMWfkhY1kJp4m-XaBPDaRhCG9VfWy/view" target="_blank" rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
