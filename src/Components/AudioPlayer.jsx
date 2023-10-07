import { useRef, useState } from "react";
import test4 from "../assets/test4.jpg";
import logo from "../assets/logo.png";
import { tracks } from "../data/tracks.js";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
// import ProgressBar from "./ProgressBar";
import VolumeControls from "./VolumeControls";

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  // const handleNext = () => {
  //   console.log(
  //     "Playing track:",
  //     currentTrack.title,
  //     "with source:",
  //     currentTrack.src
  //   );

  //   if (trackIndex >= tracks.length - 1) {
  //     setTrackIndex(0);
  //     setCurrentTrack(tracks[0]);
  //   } else {
  //     setTrackIndex((trackIndex) => trackIndex + 1);
  //     setCurrentTrack(tracks[trackIndex + 1]);
  //   }
  // };
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
  console.log(currentTrack);
  const audioRef = useRef();
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
        <div className="flex items-center ">
          <div className=" bg-green rounded-3xl lg:w-[900px] lg:h-[600px] relative">
            <div className="border-red border-2 absolute left-40">
              <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} />
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
