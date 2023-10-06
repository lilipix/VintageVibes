const DisplayTrack = ({ currentTrack, audioRef }) => {
  return (
    <div>
      <audio src={currentTrack.src} ref={audioRef} />
      <div className="text">
        <p className="title">{currentTrack.title}</p>
        <p>{currentTrack.author}</p>
      </div>
    </div>
  );
};

export default DisplayTrack;
