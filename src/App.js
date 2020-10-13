import React from "react";
import "./App.css";
import DrumPad from "./DrumPad";
import { bankOne as sounds } from "./sounds";

const App = () => {
  return (
    <div id="drum-machine">
      <div id="display">
        {sounds.map((sound) => (
          <DrumPad
            id={sound.id}
            keyTrigger={sound.keyTrigger}
            url={sound.url}
            keyCode={sound.keyCode}
            key={sound.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
