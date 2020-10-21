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

  useEffect(() => {
    const handleKeyDown = (event) => {
      // const key = event.key.toUpperCase();
      const key = String.fromCharCode(event.keyCode);
      const ref = keyRefs[key];
      if (!ref || !ref.current || ref.current.contains(event.target)) return;
      document.removeEventListener("keydown", handleKeyDown);
      ref.current.currentTime = 0;
      ref.current.play();
      setLastPressed(sounds.filter((x) => x.keyTrigger === key)[0].id);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", () => {
      document.addEventListener("keydown", handleKeyDown);
    });

    const cleanup = () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

    return cleanup;
  }, [keyRefs, setLastPressed]);

  return (
    <div id="drum-machine" ref={rootRef} tabIndex="0">
      {sounds.map((sound) => (
        <DrumPad
          id={sound.id}
          keyTrigger={sound.keyTrigger}
          url={sound.url}
          key={sound.id}
          setLastPressed={setLastPressed}
          ref={keyRefs[sound.keyTrigger]}
        />
      ))}
      <div id="display">{lastPressed}</div>
    </div>
  );
};

export default App;
