import HoverLetter from "./HoverLetter"
import RandomSong from "./RandomSong"

function IntroArea() {
  /**
   * This part of my website was inspired by this tutorial by Better Dev: 
   * https://www.youtube.com/watch?v=rCWM27pxqWw
   */

  return (
    <div class="relative min-h-screen flex -top-6 items-center justify-center bg-customblack pt-5 overflow-x-contain z-0">
      <div class="absolute inset-0 top-6 grid transform scale-y-150 -skew-y-12">
        <div class="bg-customblack z-0"> </div>

        <div class="bg-gray-500 z-0 animate-pulse"> </div>

        <div class="bg-gray-600 z-0 animate-pulse"> </div>

        <div class="bg-gray-700 z-0 animate-pulse"> </div>

        <div class="bg-gray-800 z-0 animate-pulse"> </div>

        <div class="bg-customblack z-0"> </div>
      </div>

      <div class="flex flex-col items-center justify-center text-center z-10 pb-14">
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
            <HoverLetter letter={"n"}></HoverLetter>. nice to meet you.
          </h1>
        </div>

        <div>
          <h4 class="text-xl text-customyellow font-semibold">
            I am an aspiring software engineer seeking a 4/8 month co-op
            oppurtunity starting in September 2021.
          </h4>

        </div>

        <RandomSong></RandomSong>

      </div>
    

    </div>
  );
}

export default IntroArea;
