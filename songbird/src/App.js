import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import { data, category } from './data';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [statusGame, setStatusGame] = useState(true);
  const [currentBirdCategory, setCurrentBirdCategory] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [pointsRound, setPointsRound] = useState(5);

  useEffect(() => {
    setCurrentItem(shuffleWords(data[currentBirdCategory]));
    setCorrectAnswer(false);
  }, [currentBirdCategory]);

  useEffect(() => {
    if (correctAnswer) {
      setScore(score + pointsRound);
    }
  }, [correctAnswer]);

  function shuffleWords(words) {
    const arrayWords = [...words];
    for (let i = arrayWords.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arrayWords[i];
      arrayWords[i] = arrayWords[j];
      arrayWords[j] = temp;
    }
    console.log('Ответ:', arrayWords[0].name);
    return arrayWords[0];
  }

  return (
    <div className="app">
      <div className="wrapper">
        <Header 
          score = {score}
          category = {category}
          currentBirdCategory = {currentBirdCategory}
        />
        {statusGame && (
          <Game
            data = {data}
            currentBirdCategory = {currentBirdCategory} 
            correctAnswer = {correctAnswer}
            currentItem = {currentItem}
            pointsRound = {pointsRound}
            setStatusGame = {setStatusGame}
            setCurrentBirdCategory = {setCurrentBirdCategory}
            setCorrectAnswer = {setCorrectAnswer}
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
