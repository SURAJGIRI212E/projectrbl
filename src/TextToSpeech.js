import React, { useState, useEffect } from "react";

import sound from "./clicksound.wav"
import "./TextToSpeech.css";
const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(true);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
  
    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const audio = new Audio(sound);
  
  const togglePauseResume = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
        synth.resume();
        utterance.rate = 2;
        synth.speak(utterance);
      } 
      else {
        synth.pause();
      }
      audio.play();
       setIsPaused(!isPaused);
    };

  return (
    <div id="main">
      <button
        className="speech-button"
        onClick={togglePauseResume}
      >
        {isPaused ?  <i class="gg-play-button-o larger-icon"></i>:<i class="gg-play-pause larger-icon"></i>}
      </button>
     
    </div>
  );
};

export default TextToSpeech;