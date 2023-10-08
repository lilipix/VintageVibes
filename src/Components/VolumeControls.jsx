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
      <div className=" flex flex-col py-8 px-3 gap-6 bg-brown rounded-tr-3xl rounded-br-3xl text-red font-bold shadow-lg shadow-gray-400">
        <button
          type="button"
          value={volume}
          className="text-3xl bg-blue p-2 rounded-tl-full rounded-tr-full"
          onClick={increaseVolume}
        >
          +
        </button>
        <button
          type="button"
          value={volume}
          onClick={decreaseVolume}
          className="text-5xl  bg-blue p-2 rounded-bl-full rounded-br-full"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default VolumeControls;
