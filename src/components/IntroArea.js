import HoverLetter from "./HoverLetter"
import RandomSong from "./RandomSong"

function IntroArea() {
  /**
   * This part of my website was inspired by this tutorial by Better Dev: 
   * https://www.youtube.com/watch?v=rCWM27pxqWw
   */

  return (
    <div className="relative min-h-screen flex -top-6 items-center justify-center bg-customblack pt-5 overflow-x-contain z-0">
      <div className="absolute inset-0 top-6 grid transform scale-y-150 -skew-y-12">
        <div className="bg-customblack z-0"> </div>

        <div className="bg-gray-500 z-0 animate-pulse"> </div>

        <div className="bg-gray-600 z-0 animate-pulse"> </div>

        <div className="bg-gray-700 z-0 animate-pulse"> </div>

        <div className="bg-gray-800 z-0 animate-pulse"> </div>

        <div className="bg-customblack z-0"> </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center z-10 pb-14">
        <div>
          <h1 className="text-5xl opacity-0 animate-slideIn6 text-customwhite font-bold justify-center py-4">
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
            <HoverLetter letter={"n"}></HoverLetter>. nice to meet you.
          </h1>
        </div>

        <div>
          <h4 className="text-xl opacity-0 animate-slideIn7 text-customyellow font-semibold">
            I am an aspiring software engineer, and Computer Science student at the University of British Columbia.
          </h4>

        </div>

        <RandomSong></RandomSong>

      </div>
    

    </div>
  );
}

export default IntroArea;
