import PropTypes from "prop-types";

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

DisplayTrack.propTypes = {
  audioRef: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLAudioElement),
  }),
  handleNext: PropTypes.func.isRequired,
  currentTrack: PropTypes.object.isRequired,
};

export default DisplayTrack;
