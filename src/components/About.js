import AboutDescription from "./AboutDescription";
import AboutObject from "./AboutObject"

function About() {

  const imgOneLink = "https://i.ibb.co/zRpLfbX/81439247-493028378063101-1880867203852071746-n.jpg"
  const imgTwoLink = "https://i.ibb.co/PWD7qns/61136251-177475249934327-6455957598847234331-n.jpg"

  return (
      <div class="relative flex flex-col min-h-min items-center xl:flex-row text-left bg-customblack z-10 -top-12 text-white">
        <AboutDescription></AboutDescription>
        <div class="flex flex-col min-w-max">
          <AboutObject></AboutObject>
          <div class="flex flex-row ml-3">
            <img class="rounded-xl mr-2.5" width="280" height="230" src={imgOneLink}></img>
            <img class="rounded-xl ml-2.5" width="220" src={imgTwoLink}></img>
          </div>
        </div>
      </div>
  );
}

export default About;
