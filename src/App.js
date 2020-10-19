import React, { useRef, createRef, useEffect } from "react";
import "./App.css";
import DrumPad from "./DrumPad";
import { bankOne as sounds } from "./sounds";

const App = () => {
  const rootRef = useRef();
  const keyRefs = sounds.reduce((a, c) => {
    a[c.keyTrigger] = createRef();
    return a;
  }, {});

  useEffect(() => {
    const handleKeyDown = (event) => {
      const ref = keyRefs[event.key.toUpperCase()];
      console.log(event.key);
      if (!ref || !ref.current || ref.current.contains(event.target)) return;
      ref.current.play();
    };

    document.addEventListener("keydown", handleKeyDown);

    const cleanup = () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

    return cleanup;
  }, [keyRefs]);

  return (
    <div id="drum-machine" ref={rootRef} tabIndex="0">
      <div id="display">
        {sounds.map((sound) => (
          <DrumPad
            id={sound.id}
            keyTrigger={sound.keyTrigger}
            url={sound.url}
            keyCode={sound.keyCode}
            key={sound.id}
            ref={keyRefs[sound.keyTrigger]}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
