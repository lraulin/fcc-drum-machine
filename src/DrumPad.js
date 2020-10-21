import React from "react";

const DrumPad = ({ id, keyTrigger, url, playSound }) => {
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
};

export default DrumPad;
