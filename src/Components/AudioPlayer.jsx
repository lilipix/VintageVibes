import { useRef, useState } from "react";
import test4 from "../assets/test4.jpg";
import logo from "../assets/logo.png";
import { tracks } from "../data/tracks.js";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import "./AudioPlayer.css";
import ProgressBar from "./ProgressBar";
import VolumeControls from "./VolumeControls";

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

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
          className="lg:hidden"
        />
        <div className=" bg-green rounded-3xl lg:w-[900px] lg:h-[600px] relative">
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
          <div className="flex flex-col">
            <div className="border-red border-2 absolute">
              <DisplayTrack
                currentTrack={currentTrack}
                audioRef={audioRef}
                className="flex"
              />
            </div>
            <div className="flex">
              <ProgressBar />
            </div>
            <div>
              <VolumeControls audioRef={audioRef} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AudioPlayer;
