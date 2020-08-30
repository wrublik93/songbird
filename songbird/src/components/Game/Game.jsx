import React, {useState} from 'react';
import Task from './Task/Task';
import Answer from './Answer/Answer';
import Card from './Card/Card';
import Button from '../Button/Button';
import './Game.scss';

function Game({
  data,
  currentBirdCategory,
  correctAnswer,
  currentItem,
  pointsRound,
  setStatusGame,
  setCurrentBirdCategory,
  setCorrectAnswer,
  setPointsRound,
}) {
    const [userResponse, setUserResponse] = useState('');
    const styleInstruction = `card_container instruction`;

  return (
    <main className="main">
      <Task
        correctAnswer = {correctAnswer}
        currentItem = {currentItem}
      />
      <div className="response">
        <Answer
          data = {data}
          currentBirdCategory = {currentBirdCategory}
          currentItem = {currentItem}
          correctAnswer = {correctAnswer}
          pointsRound = {pointsRound}
          setUserResponse = {setUserResponse}
          setCorrectAnswer = {setCorrectAnswer}
          setPointsRound = {setPointsRound}
        />
        {userResponse ? (
          <Card userResponse={userResponse} />
        ) : (
          <div className={styleInstruction}>
            Прослушайте плеер и выберите птицу из списка.
            Следующий уровень будет доступен после правильного ответа!
          </div>
        )}
      </div>
      <Button
        currentBirdCategory={currentBirdCategory}
        correctAnswer={correctAnswer}
        setStatusGame={setStatusGame}
        setCurrentBirdCategory={setCurrentBirdCategory}
        setUserResponse={setUserResponse}
        setPointsRound={setPointsRound}
      />
    </main>
  );
}

export default Game;
