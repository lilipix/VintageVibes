import { useEffect, useState } from "react";

const VolumeControls = ({ audioRef }) => {
  const [volume, setVolume] = useState(60);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      console.log("Changing volume to:", volume / 100);
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
      <div className="text-xl ">
        <button
          type="button"
          value={volume}
          className="p-8"
          onClick={increaseVolume}
        >
          +
        </button>
        <button type="button" value={volume} onClick={decreaseVolume}>
          -
        </button>
      </div>
    </div>
  );
};

export default VolumeControls;
