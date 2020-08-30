import React, { useRef, useEffect } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.scss';

const Player = ({ audio, isFoundCorrectAnswer }) => {
  let ref = useRef();
  useEffect(() => {
    ref.audio.current.pause();
  }, [isFoundCorrectAnswer]);

  return (
    <ReactAudioPlayer
      src={audio}
      className="music-track__question"
      autoPlayAfterSrcChange={false}
      showJumpControls={false}
      autoPlay={false}
      layout={'horizontal'}
      ref={(elem) => (ref = elem)}
    />
  );
};

export default Player;