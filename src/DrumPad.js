import React from "react";
import { forwardRef } from "react";

const DrumPad = forwardRef(({ id, keyTrigger, keyCode, url }, ref) => {
  const handleClick = () => {
    ref.current.play();
  };

  const handleKeyPress = (event) => {
    console.log("Key Press!");
    event.preventDefault();
    if (event.charCode === keyCode) {
      ref.current.play();
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
        <audio className="clip" id={keyTrigger} src={url} ref={ref}></audio>
      </button>
    </div>
  );
});

export default DrumPad;
