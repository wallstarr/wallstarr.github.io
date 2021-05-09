import { Link } from "react-router-dom";

function Dropdown({isOpen, toggle}) {
  return (
      <div className={isOpen ? "grid grid-rows-4 text-center items-center font-sans font-semibold bg-customblack text-white" : "hidden"}
            onClick={toggle}>
          <Link className="p-4 z-10" to="/about">About</Link>
          <Link className="p-4 z-10" to="/experience">Experience</Link>
          <Link className="p-4 z-10" to="/projects">Projects</Link>
          <Link className="p-4 z-10" to="/contact">Contact</Link>
          <Link className="p-4 z-10 underline text-customyellow animate-pulse" to="/resume">Resume</Link>
      </div>
  );
}

export default Dropdown;
