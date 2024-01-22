function Dropdown({isOpen, toggle}) {
  return (
      <div className={isOpen ? "grid grid-rows-4 text-center items-center font-sans font-semibold bg-customblack text-white" : "hidden"}
            onClick={toggle}>
          <a className="p-4 z-10" href="#about">About</a>
          <a className="p-4 z-10" href="#projects">Projects</a>
          <a className="p-4 z-10" href="#experience">Experience</a>
          <a className="p-4 z-10" href="#contact">Contact</a>
          <a className="p-4 z-10 underline text-customyellow animate-pulse" href="https://drive.google.com/file/d/1w9lrxKOT_uPDd6E7UlK25XrRIKYehGjW/view" target="_blank" rel="noreferrer">Resume</a>
      </div>
  );
}

export default Dropdown;
