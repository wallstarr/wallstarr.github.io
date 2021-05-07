import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="py-4 flex justify-between">
 
      <Link to="/" className="pl-7 font-mono font-bold text-xl">
        DB
      </Link>

      <div className="cursor-pointer md:hidden pr-6">
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
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      <div className="pr-8 pt-0.5 md:block hidden font-mono align-middle">
          <Link className="p-4" to="/about"> About</Link>
          <Link className="p-4" to="/experience"> Experience </Link>
          <Link className="p-4" to="/projects"> Projects </Link>
          <Link className="p-4" to="/contact"> Contact </Link>
      </div>

    </nav>
  );
}

export default NavBar;
