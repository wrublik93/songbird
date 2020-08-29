import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import { data, category } from './data';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [statusGame, setStatusGame] = useState(true);
  const [currentMusicCategory, setCurrentMusicCategory] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [pointsRound, setPointsRound] = useState(5);

  useEffect(() => {
    setCurrentItem(shuffleWords(data[currentMusicCategory]));
    setCorrectAnswer(false);
  }, [currentMusicCategory]);

  useEffect(() => {
    if (correctAnswer) {
      setScore(score + pointsRound);
    }
  }, [correctAnswer]);

  function shuffleWords(words) {
    const arr = [...words];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    console.log(
      'Правильный ответ в категории',
      category[currentMusicCategory],
      ':',
      arr[0].name
    );
    return arr[0];
  }

  return (
    <div className="app">
      <div className="wrapper">
        <Header 
          score = {score}
          category = {category}
          currentMusicCategory = {currentMusicCategory}
        />
        {statusGame && (
          <Game
            data = {data}
            currentMusicCategory = {currentMusicCategory} 
            setStatusGame = {setStatusGame}
            setCurrentMusicCategory = {setCurrentMusicCategory}
            correctAnswer = {correctAnswer}
            currentItem = {currentItem}
            pointsRound = {pointsRound}
            setPointsRound = {setPointsRound}
          />
        )}
        {!statusGame && (
          <Result 
            score = {score}
            setScore = {setScore}
            setStatusGame = {setStatusGame}
          />
        )}
      </div>
    </div>
  );
}

export default App;
