import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const VolumeControls = ({ audioRef }) => {
  const [volume, setVolume] = useState(60);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  const increaseVolume = () => {
    setVolume((volume) => (volume < 100 ? volume + 10 : 100));
  };

  const decreaseVolume = () => {
    setVolume((volume) => (volume > 0 ? volume - 10 : 0));
  };

  return (
    <div>
      <div className=" flex flex-col py-4 px-2 xl:py-8 xl:px-3 gap-6 bg-brown rounded-tr-3xl rounded-br-3xl text-red font-bold  border-t-darkBrown border-r-darkBrown border-b-darkBrown border-4 border-l-0">
        <button
          type="button"
          value={volume}
          className="xl:text-3xl bg-blue p-1 lg:p-2 rounded-tl-full rounded-tr-full border-darkBrown border-2 "
          onClick={increaseVolume}
        >
          +
        </button>
        <button
          type="button"
          value={volume}
          onClick={decreaseVolume}
          className="xl:text-5xl text-2xl bg-blue p-1 lg:p-2 rounded-bl-full rounded-br-full border-darkBrown border-2"
        >
          -
        </button>
      </div>
    </div>
  );
};

VolumeControls.propTypes = {
  audioRef: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLAudioElement),
  }),
};

export default VolumeControls;
