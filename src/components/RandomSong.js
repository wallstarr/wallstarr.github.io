import {useState} from 'react'
import data from "./RandomSongList.json"


function RandomSong() {
  
  function getRandomSongLink() {
      const songs = data;
      const randomSong = songs[Math.floor(Math.random() * songs.length)]
      return randomSong
  }  

  const [isClicked, setIsClicked] = useState(false);
  const [songLink, setLink] = useState(getRandomSongLink())


  return (
    <div class="play-video flex-row">
      <button onClick={() => {
          if (!isClicked) {
            setIsClicked(true);
            setLink(songLink + "?autoplay=1");
          } else {
            setLink(getRandomSongLink() + "?autoplay=1")
          }
          
      }} class="rounded font-sans text-customblack bg-customyellow text-xl font-semibold p-0.5 pl-1 pr-1 mt-3 hover:text-customyellow hover:bg-customblack transition ease-in-out duration-100">
        random song?
      </button>
      <div class={isClicked ? "pt-2" : "hidden"}>
        <iframe
          width="300"
          height="200"
          src={songLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default RandomSong;
