import { useEffect } from "react";
import "./App.css";
import AudioPlayer from "./Components/AudioPlayer";

function App() {
  useEffect(() => {
    if ("screen" in window && "orientation" in window.screen) {
      window.screen.orientation.lock("portrait").catch(function (error) {
        console.error("Erreur lors du verrouillage de l'orientation: ", error);
      });
    }
  }, []);

  return (
    <div className="bg-picture bg-cover bg-repeat h-screen w-screen ">
      <div className="rotate-container ">
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
