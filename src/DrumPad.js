import React from "react";
import { forwardRef } from "react";

const DrumPad = forwardRef(({ id, keyTrigger, url, setLastPressed }, ref) => {
  const handleClick = () => {
    ref.current.currentTime = 0;
    ref.current.play();
    setLastPressed(id);
  };

  return (
    <div>
      <button className="drum-pad" id={id} onClick={handleClick}>
        {keyTrigger}
        <audio className="clip" id={keyTrigger} src={url} ref={ref}></audio>
      </button>
    </div>
  );
});

export default DrumPad;
