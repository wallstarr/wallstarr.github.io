import { Link } from "react-router-dom";

function Dropdown({isOpen, toggle}) {
  return (
      <div className={isOpen ? "grid grid-rows-4 text-center items-center font-sans font-semibold bg-customblack text-white" : "hidden"}
            onClick={toggle}>
          <a className="p-4 z-10" href="#about">About</a>
          <a className="p-4 z-10" href="#projects">Projects</a>
          <a className="p-4 z-10" href="#experience">Experience</a>
          <a className="p-4 z-10" href="#contact">Contact</a>
          <Link className="p-4 z-10 underline text-customyellow animate-pulse" to="/resume">Resume</Link>
      </div>
  );
}

export default Dropdown;
