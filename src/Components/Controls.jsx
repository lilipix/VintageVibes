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
          className="mr-7 p-2 lg:py-4 lg:px-8 lg:mr-1 bg-brown rounded-t-lg "
        >
          <IoPlaySkipBackSharp className="text-blue text-2xl" />
        </button>
        <button
          onClick={skipBackward}
          className="mr-7 p-2 lg:py-2 lg:px-8 lg:mr-1 bg-brown rounded-t-lg "
        >
          <IoPlayBackSharp className="text-blue text-2xl" />
        </button>

        {
          <button
            onClick={togglePlayPause}
            className="mr-7 p-2 lg:py-2 lg:px-8 lg:mr-1 bg-brown rounded-t-lg "
          >
            <HiMiniPlayPause className="text-blue text-2xl" />
          </button>
        }

        {/* <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        */}
        <button
          onClick={skipForward}
          className="mr-7 p-2 lg:py-2 lg:px-8 lg:mr-1 bg-brown rounded-t-lg "
        >
          <IoPlayForwardSharp className="text-blue text-2xl" />
        </button>
        <button
          onClick={handleNext}
          className="mr-7 p-2 lg:py-2 lg:px-8 lg:mr-1 bg-brown rounded-t-lg "
        >
          <IoPlaySkipForwardSharp className="text-blue text-2xl" />
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
