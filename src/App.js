import React, { useRef, createRef, useEffect } from "react";
import { useState } from "react";
import "./App.css";
import DrumPad from "./DrumPad";
import { bankOne as sounds } from "./sounds";

const App = () => {
  const [lastPressed, setLastPressed] = useState("");
  const rootRef = useRef();
  const keyRefs = sounds.reduce((a, c) => {
    a[c.keyTrigger] = createRef();
    return a;
  }, {});

  const playSound = (key) => {
    const audio = document.getElementById(key);
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          audio.currentTime = 0;
          console.log(`Playing sound for ${key}`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setLastPressed(
      sounds.find((x) => x.keyTrigger.toUpperCase() === key.toUpperCase()).id
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      document.removeEventListener("keydown", handleKeyDown);
      const key = event.key.toUpperCase();
      playSound(key);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", () => {
      document.addEventListener("keydown", handleKeyDown);
    });

    const cleanup = () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

    return cleanup;
  }, []);

  return (
    <div id="drum-machine" ref={rootRef} tabIndex="0">
      {sounds.map((sound) => (
        <DrumPad
          id={sound.id}
          keyTrigger={sound.keyTrigger}
          url={sound.url}
          key={sound.id}
          playSound={playSound}
        />
      ))}
      <div id="display">{lastPressed}</div>
    </div>
  );
};

export default App;
