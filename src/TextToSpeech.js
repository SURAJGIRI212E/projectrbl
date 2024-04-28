import React, { useState, useEffect } from "react";

import sound from "./popclick.wav"
import "./TextToSpeech.css";
const TextToSpeech = ({ text }) => {
  console.log(text)
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
    audio.play();
    const synth = window.speechSynthesis;

    if (isPaused) {

        synth.resume();
        utterance.rate = 1.8;
        const voices = speechSynthesis.getVoices();
  utterance.voice = voices[2]; // Choose a specific voice

        synth.speak(utterance);
      } 
      else {
        synth.pause();
      }
     
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