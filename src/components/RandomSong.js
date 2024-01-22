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
    <div className="play-video flex-row animate-slideIn8 opacity-0">
      <button onClick={() => {
          if (!isClicked) {
            setIsClicked(true);
            setLink(songLink + "?autoplay=1");
          } else {
            setLink(getRandomSongLink() + "?autoplay=1")
          }
          
      }} className="rounded font-sans text-customblack bg-customyellow text-xl font-semibold p-0.5 pl-1 pr-1 mt-3 hover:text-customyellow hover:bg-customblack transition ease-in-out duration-100">
        random song?
      </button>
      <div className={isClicked ? "pt-2" : "hidden"}>
        <iframe
          width="300"
          height="200"
          src={songLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default RandomSong;
