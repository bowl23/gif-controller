import React, { useRef, useEffect } from "react";

import gif from "./machine-process.gif";

function App() {
  const gifRef = useRef(null);
  const sup1 = useRef(null);

  useEffect(() => {
    console.log(1);
    sup1.current = new SuperGif({ gif: gifRef.current });
    sup1.current.load();
    // sup1.current.pause();
    return () => {
      gifRef.current = null;
      sup1.current = null;
    };
  }, []);

  const handlePause = () => {
    sup1.current.pause();
  };
  const handlePlay = () => {
    sup1.current.play();
  };
  const handleRestart = () => {
    sup1.current.move_to(0);
  };
  const handleStepForward = () => {
    sup1.current.move_relative(1);
  };
  const handleStepBack = () => {
    sup1.current.move_relative(-1);
  };
  const goToFrame = (frame) => {
    sup1.current.move_to(frame);
  };

  return (
    <div className="App">
      <img ref={gifRef} src={gif} alt="gifff" />
      <br />
      <a onClick={() => handlePause()}>Pause</a> |
      <a onClick={() => handlePlay()}>Play</a> |
      <a onClick={() => handleRestart()}>Restart</a> |
      <a onClick={() => handleStepForward()}>Step forward</a> |
      <a onClick={() => handleStepBack()}>Step back</a>
    </div>
  );
}

export default App;
