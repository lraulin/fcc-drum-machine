import React from "react";
import { forwardRef } from "react";

const DrumPad = forwardRef(({ id, keyTrigger, url, playSound }) => {
  const handleClick = (key) => {
    playSound(key);
  };

  return (
    <div>
      <button
        className="drum-pad"
        id={id}
        onClick={() => handleClick(keyTrigger)}
      >
        {keyTrigger}
        <audio className="clip" id={keyTrigger} src={url}></audio>
      </button>
    </div>
  );
});

export default DrumPad;
