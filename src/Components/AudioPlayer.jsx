import { useRef, useState } from "react";
import test4 from "../assets/test4.jpg";
import logo from "../assets/logo.png";
import { tracks } from "../data/tracks.js";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import VolumeControls from "./VolumeControls";

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

  const handleNext = () => {
    let nextTrackIndex;
    if (trackIndex >= tracks.length - 1) {
      nextTrackIndex = 0;
    } else {
      nextTrackIndex = trackIndex + 1;
    }

    setTrackIndex(nextTrackIndex);
    setCurrentTrack(tracks[nextTrackIndex]);
  };

  const audioRef = useRef();
  console.log("méthodes :", audioRef);
  // console.log("méthodes :", audioRef.current);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col">
        <Controls
          audioRef={audioRef}
          tracks={tracks}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          setCurrentTrack={setCurrentTrack}
          handleNext={handleNext}
          currentTrack={currentTrack}
          className="lg:hidden"
        />
        <div className="flex items-center justify-center ">
          <div className=" bg-green rounded-3xl lg:w-[900px] lg:h-[600px] relative shadow-lg shadow-gray-400 ">
            <div className=" border-double border-black  border-4 w-[300px] rounded">
              <DisplayTrack
                currentTrack={currentTrack}
                audioRef={audioRef}
                handleNext={handleNext}
              />
            </div>

            <div className="flex justify-end items-end  ">
              <img
                src={logo}
                alt="logo"
                className=" w-1/5 h-1/5 lg:w-1/5 absolute top-0 right-0 rounded-3xl"
              />
            </div>
            <div className=" w-full h-full flex items-center justify-center flex-col">
              <div className="rounded-full border-red border-8 shadow-strong-inner">
                <img
                  src={test4}
                  alt="tape"
                  className="lg:w-[600px] rounded-full   "
                />
              </div>
            </div>
          </div>
          <div>
            <VolumeControls audioRef={audioRef} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AudioPlayer;
