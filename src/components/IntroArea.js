import { Link } from "react-router-dom";
import HoverLetter from "./HoverLetter.js";

function IntroArea({ isOpen, toggle }) {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center text-center bg-customblack">
      <div>
        <h1 class="text-5xl text-customwhite font-bold justify-center py-4">
          hello, my name is
          <HoverLetter letter={" D"}></HoverLetter>
          <HoverLetter letter={"a"}></HoverLetter>
          <HoverLetter letter={"n"}></HoverLetter>
          <HoverLetter letter={" "}></HoverLetter>
          <HoverLetter letter={"B"}></HoverLetter>
          <HoverLetter letter={"l"}></HoverLetter>
          <HoverLetter letter={"u"}></HoverLetter>
          <HoverLetter letter={"s"}></HoverLetter>
          <HoverLetter letter={"t"}></HoverLetter>
          <HoverLetter letter={"e"}></HoverLetter>
          <HoverLetter letter={"i"}></HoverLetter>
          <HoverLetter letter={"n"}></HoverLetter>. nice to meet (?) you
        </h1>
      </div>

      <div>
        <h4 class="text-xl text-customyellow font-semibold">
          I am an aspiring software engineer seeking a 4/8 month co-op
          oppurtunity starting in September 2021.
        </h4>
      </div>
    </div>
  );
}

export default IntroArea;
