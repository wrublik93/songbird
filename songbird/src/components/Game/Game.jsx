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
    const styleInstruction = `card-instruction`;
    const [userSelect, setUserSelect] = useState('');

  return (
    <div>
      <Task
        correctAnswer = {correctAnswer}
        currentItem = {currentItem}
      />
      <div className = "answers-card-container">
        <Answer
          data = {data}
          currentBirdCategory = {currentBirdCategory}
          currentItem = {currentItem}
          correctAnswer = {correctAnswer}
          pointsRound = {pointsRound}
          setUserSelect = {setUserSelect}
          setCorrectAnswer = {setCorrectAnswer}
          setPointsRound = {setPointsRound}
        />
        {userSelect ? (
          <Card userSelect = {userSelect} />
        ) : (
          <div className = {styleInstruction}>
            Прослушайте плеер и выберите птицу из списка.
            Следующий уровень будет доступен после правильного ответа!
          </div>
        )}
      </div>
      <Button
        currentBirdCategory = {currentBirdCategory}
        correctAnswer = {correctAnswer}
        setStatusGame = {setStatusGame}
        setCurrentBirdCategory = {setCurrentBirdCategory}
        setUserSelect = {setUserSelect}
        setPointsRound = {setPointsRound}
      />
    </div>
  );
}

export default Game;
