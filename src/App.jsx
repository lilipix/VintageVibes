import "./App.css";
import AudioPlayer from "./Components/AudioPlayer";

function App() {
  return (
    <div className="bg-amber-50 bg-cover bg-repeat h-screen w-screen ">
      <div className="rotate-container ">
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
