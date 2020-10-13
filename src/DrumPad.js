import React, { useRef } from "react";

const DrumPad = ({ id, keyTrigger, keyCode, url }) => {
  const audio = useRef(null);

  const handleClick = () => {
    audio.current.play();
  };

  const handleKeyPress = (event) => {
    console.log("Key Press!");
    event.preventDefault();
    if (event.charCode === keyCode) {
      audio.current.play();
    }
  };

  return (
    <div tabIndex={0} onKeyDown={(e) => handleKeyPress(e)}>
      <button
        className="drum-pad"
        id={id}
        onClick={handleClick}
        onKeyDown={(e) => handleKeyPress(e)}
      >
        {keyTrigger}
        <audio className="clip" id={keyTrigger} src={url} ref={audio}></audio>
      </button>
    </div>
  );
};

export default DrumPad;
