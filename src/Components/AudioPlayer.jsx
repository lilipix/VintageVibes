import { useRef, useState } from "react";
import test4 from "../assets/test4.jpg";
import logo1 from "../assets/logo1.png";
import { tracks } from "../data/tracks.js";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import VolumeControls from "./VolumeControls";
import Footer from "./Footer";

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
    <div className="flex flex-col h-screen  relative">
      <main className="flex-grow flex items-center justify-center max-h-full">
        <div className=" flex flex-col bg-beige md:p-4 md:pl-4 md:pb-4 lg:p-8 lg:pl-20 lg:pb-20 border-darkBrown border-4 rounded-3xl pt-6 pb-8 pl-2 pr-2">
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
            <div className=" bg-green rounded-3xl w-[300px] h-[200px] md:h-[280px] md:w-[420px] lg:h-[467px] lg:w-[600px] xl:w-[900px] xl:h-[600px] relative flex flex-col border-darkBrown border-4  ">
              <div className=" border-double border-black  border-4 md:w-[360px] xl:w-[500px] rounded-3xl flex self-center bg-gray-500 mt-5 mb-5 lg:mt-10 overflow-hidden relative h-24 items-center p-4 w-[280px]">
                <DisplayTrack
                  currentTrack={currentTrack}
                  audioRef={audioRef}
                  handleNext={handleNext}
                />
              </div>
              <div className=" flex grow items-center justify-center">
                <div className="rounded-full border-red border-8 mb-16 lg:mb-24 ">
                  <img
                    src={test4}
                    alt="tape"
                    className=" w-[150px] md:w-[300px] lg:w-[400px] xl:w-[600px]  rounded-full "
                  />
                </div>
              </div>
              <div>
                <img
                  src={logo1}
                  alt="logo"
                  className="absolute md:bottom-5 left-4 xl:left-6 md:w-16 xl:w-36 w-8 bottom-2"
                />
              </div>
            </div>
            <div>
              <VolumeControls audioRef={audioRef} />
            </div>
          </div>
        </div>
      </main>
      <div className="flex justify-center mb-4 ">
        <Footer className="container" />
      </div>
    </div>
  );
};

export default AudioPlayer;
