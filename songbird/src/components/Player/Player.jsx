import React, { useRef, useEffect } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.scss';

const Player = ({ 
  audio, 
  correctAnswer 
}) => {
  let ref = useRef();
  useEffect(() => {
    ref.audio.current.pause();
  }, [correctAnswer]);

  return (
    <ReactAudioPlayer
      src = {audio}
      autoPlayAfterSrcChange = {false}
      showJumpControls = {false}
      autoPlay = {false}
      layout = {'horizontal'}
      ref = {(elem) => (ref = elem)}
    />
  );
};

export default Player;