import PropTypes from "prop-types";

const DisplayTrack = ({ currentTrack, audioRef, handleNext }) => {
  return (
    <div>
      <audio src={currentTrack.src} ref={audioRef} onEnded={handleNext} />
      <div className="flex flex-row  font-press uppercase scrolling-text">
        <p>
          {currentTrack.title}
          <span className="mx-2 font-press">-</span>
          {currentTrack.author}
        </p>
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
