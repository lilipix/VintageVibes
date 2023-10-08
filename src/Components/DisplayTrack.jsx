const DisplayTrack = ({ currentTrack, audioRef, handleNext }) => {
  return (
    <div>
      <audio src={currentTrack.src} ref={audioRef} onEnded={handleNext} />
      <div className="flex flex-row justify-center p-8 font-press ">
        <p className="title">{currentTrack.title}</p>
        <br /> - <br />
        <p>{currentTrack.author}</p>
      </div>
    </div>
  );
};

export default DisplayTrack;
