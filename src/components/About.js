import AboutDescription from "./AboutDescription";
import AboutObject from "./AboutObject"

function About() {

  const imgOneLink = "https://i.ibb.co/zRpLfbX/81439247-493028378063101-1880867203852071746-n.jpg"
  const imgTwoLink = "https://i.ibb.co/PWD7qns/61136251-177475249934327-6455957598847234331-n.jpg"

  return (
      <div class="pb-12 relative flex flex-col min-h-min items-center xl:flex-row text-left bg-customblack z-10 -mt-12 text-white" id="about">
        <AboutDescription></AboutDescription>
        <div class="flex flex-col min-w-max">
          <AboutObject></AboutObject>
          <div class="flex flex-col sm:flex-row flex-shrink ml-3 max-w-full">
            <img class="border-2 border-opacity-0 border-customwhite hover:border-opacity-100 rounded-xl mr-2.5" width="280" height="230" src={imgOneLink} alt=""></img>
            <img class="border-2 border-opacity-0 border-customwhite hover:border-opacity-100 rounded-xl ml-2.5" width="220" src={imgTwoLink} alt=""></img>
          </div>
        </div>
      </div>
  );
}

export default About;
