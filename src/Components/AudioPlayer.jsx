import { useRef, useState } from "react";
import test4 from "../assets/test4.jpg";
import logo1 from "../assets/logo1.png";
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

  return (
    // sm:transform sm:rotate-90
    <main className="flex min-h-screen items-center justify-center ">
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
          <div className=" bg-green rounded-3xl lg:w-[900px] lg:h-[600px] relative shadow-lg shadow-gray-400 flex flex-col">
            <div className=" border-double border-black  border-4 w-[500px] rounded-3xl flex self-center bg-gray-500 mt-10 overflow-hidden relative h-24 items-center">
              <DisplayTrack
                currentTrack={currentTrack}
                audioRef={audioRef}
                handleNext={handleNext}
              />
            </div>

            {/* <div className="flex justify-end ">
              <img
                src={logo}
                alt="logo"
                className=" w-1/5 h-1/5 lg:w-1/5 absolute top-0 right-0 rounded-3xl"
              />
            </div> */}
            <div className=" flex grow items-center justify-center">
              <div className="rounded-full border-red border-8 mb-24 ">
                <img
                  src={test4}
                  alt="tape"
                  className="lg:w-[600px] rounded-full "
                />
              </div>
            </div>
            <div>
              <img
                src={logo1}
                alt="logo"
                className="absolute bottom-5 left-6 w-36"
              />
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
