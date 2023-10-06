import { useState } from "react";
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  // IoPlaySharp,
  // IoPauseSharp,
} from "react-icons/io5";

import { HiMiniPlayPause } from "react-icons/hi2";

const Controls = ({
  audioRef,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const skipForward = () => {};

  const skipBackward = () => {};

  // const togglePlayPause = () => {
  //   setIsPlaying((prev) => {
  //     const newState = !prev;
  //     if (newState) {
  //       audioRef.current.play();
  //     } else {
  //       audioRef.current.pause();
  //     }
  //     return newState;
  //   });
  // };

  const togglePlayPause = () => {
    setIsPlaying((isPlaying) => {
      if (!isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      return !isPlaying;
    });
  };

  const handlePrevious = () => {};

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex(trackIndex + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <div className="flex ml-6 lg:ml-8 ">
      <div className="flex">
        <button
          onClick={handlePrevious}
          className="mr-7 p-2 lg:py-4 lg:px-8 lg:mr-1 bg-brown rounded-t-lg "
        >
          <IoPlaySkipBackSharp className="text-blue" />
        </button>
        <button
          onClick={skipBackward}
          className="mr-7 p-2 lg:py-2 lg:px-8 lg:mr-1 bg-brown rounded-t-lg "
        >
          <IoPlayBackSharp className="text-blue" />
        </button>
        <button
          onClick={togglePlayPause}
          className="mr-7 p-2 lg:py-2 lg:px-8 lg:mr-1 bg-brown rounded-t-lg "
        >
          <HiMiniPlayPause className="text-blue" />
        </button>
        {/* <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        */}
        <button
          onClick={skipForward}
          className="mr-7 p-2 lg:py-2 lg:px-8 lg:mr-1 bg-brown rounded-t-lg "
        >
          <IoPlayForwardSharp className="text-blue" />
        </button>
        <button
          onClick={handleNext}
          className="mr-7 p-2 lg:py-2 lg:px-8 lg:mr-1 bg-brown rounded-t-lg "
        >
          <IoPlaySkipForwardSharp className="text-blue" />
        </button>
      </div>
    </div>
  );
};

export default Controls;
