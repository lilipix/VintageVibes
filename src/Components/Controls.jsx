import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";

import { HiMiniPlayPause } from "react-icons/hi2";

const Controls = ({
  audioRef,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
  currentTrack,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const handlePrevious = () => {
    let lastTrackIndex;
    if (trackIndex === 0) {
      lastTrackIndex = tracks.length - 1;
    } else {
      lastTrackIndex = trackIndex - 1;
    }

    setTrackIndex(lastTrackIndex);
    setCurrentTrack(tracks[lastTrackIndex]);
  };

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.src;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack, isPlaying, audioRef]);

  return (
    <div className="flex ml-6 lg:ml-8 ">
      <div className="flex">
        <button
          onClick={handlePrevious}
          className="mr-2 p-2 md:px-5 xl:py-4 xl:px-8 xl:mr-1 bg-brown rounded-t-lg border-t-darkBrown border-r-darkBrown border-l-darkBrown border-4 border-b-0 px-2 ml-3 "
        >
          <IoPlaySkipBackSharp className="text-blue lg:text-2xl" />
        </button>
        <button
          onClick={skipBackward}
          className="mr-2 md:p-2 md:px-5 xl:py-2 xl:px-8 xl:mr-1 bg-brown rounded-t-lg  border-t-darkBrown border-r-darkBrown border-l-darkBrown border-4 border-b-0 px-2 "
        >
          <IoPlayBackSharp className="text-blue lg:text-2xl" />
        </button>

        {
          <button
            onClick={togglePlayPause}
            className="mr-2 p-2 md:px-5 xl:py-2 xl:px-8 xl:mr-1 bg-brown rounded-t-lg  border-t-darkBrown border-r-darkBrown border-l-darkBrown border-4 border-b-0 px-2 "
          >
            <HiMiniPlayPause className="text-blue lg:text-2xl" />
          </button>
        }

        <button
          onClick={skipForward}
          className="mr-2 p-2 md:px-5 xl:py-2 xl:px-8 xl:mr-1 bg-brown rounded-t-lg  border-t-darkBrown border-r-darkBrown border-l-darkBrown border-4 border-b-0 px-2 "
        >
          <IoPlayForwardSharp className="text-blue lg:text-2xl" />
        </button>

        <button
          onClick={handleNext}
          className="mr-2 p-2 md:px-5 xl:py-2 xl:px-8 xl:mr-1 bg-brown rounded-t-lg border-t-darkBrown border-r-darkBrown border-l-darkBrown border-4 border-b-0 px-2 "
        >
          <IoPlaySkipForwardSharp className="text-blue lg:text-2xl" />
        </button>
      </div>
    </div>
  );
};

Controls.propTypes = {
  audioRef: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLAudioElement),
  }),
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  trackIndex: PropTypes.number.isRequired,
  setTrackIndex: PropTypes.func.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  currentTrack: PropTypes.object.isRequired,
};

export default Controls;
