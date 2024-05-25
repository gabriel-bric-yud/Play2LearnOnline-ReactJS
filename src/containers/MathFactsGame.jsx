import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { randInt } from '../helpers/RandInt.js';
import Label from '../components/Label.jsx';
import NumberButton from '../components/NumberButton.jsx';
import ClearButton from '../components/ClearButton.jsx'
import Timer from '../components/Timer.jsx';
import Score from '../components/Score.jsx';
import Answer from '../components/Answer.jsx';
import KeyboardNumbers from '../components/KeyboardNumbers.jsx';


function MathFactsGame(props) {

  
  let randNums = getRandNumbers(props.operation[1], 0, Number(props.maxNumber[0]));
  const [operands, setOperands] = useState(randNums);
  const equation = operands.num1 + props.operation[1] + operands.num2;
  const [userAnswer, setUserAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const gameLength = 30; // Seconds
  const [Time, setTime] = useState(gameLength);
  const [score, setScore] = useState(0);

  function getRandNumbers(operator, low, high) {
    let num1 = randInt(low,high);
    let num2 = randInt(low, high);
    const numHigh = Math.max(num1, num2);
    const numLow = Math.min(num1, num2);

    if(operator === '-') { 
      num1 = numHigh;
      num2 = numLow;
    }
  
    if(operator === '/') {
      if (num2 === 0) { 
        num2 = randInt(1, high);
      }
      num1 = (num1 * num2);
    }
    return {num1, num2};
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  let numbers = [];
  for (let i = 1; i <10; i++) {
    numbers.push(i);
    if (i === 9) {
      numbers.push(0)
    }
  };

  const numberButtons = numbers.map((number) =>
    <NumberButton value={number} key={number} handleClick = {appendToAnswer} />
  );


  function appendToAnswer(num) {
    setUserAnswer(String(Number(userAnswer + num)));
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  function checkAnswer() {
    let correctAnswer
    switch(props.operation[1]) {
      case "+":
        correctAnswer = operands.num1 + operands.num2;
        break;
      case "-":
        correctAnswer = operands.num1 - operands.num2;
        break;
      case "x":
        correctAnswer = operands.num1 * operands.num2;
        break;
      case "/":
        correctAnswer = operands.num1 / operands.num2;
        break;
    }

    return parseInt(userAnswer) === correctAnswer;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  function newQuestion() {
    setUserAnswer('');
    setAnswered(false);
    randNums = getRandNumbers(props.operation[1], 0, props.maxNumber[0]);
    setOperands(randNums);
  }

  if (!answered && checkAnswer(userAnswer)) {
    setAnswered(true);
    setScore(score + 1);
    setTimeout(newQuestion, 300);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  function restart() {
    setTime(gameLength);
    setScore(0);
    newQuestion();
  }


  if (Time === 0) {
    return (
      <div className="text-center game">
        <Label text = {props.operation[0].toUpperCase()} textWeight = "2rem" />
        <h2>Time's Up!</h2>
        <div style={{fontSize: "1.5em"}}>Your final score is:</div>
        <div style={{fontSize: "5em"}}>{score}</div>
        <div className = "card-footer">
          <button className="btn btn-success m-1 form-control w-75"
            onClick={restart}>
              Play Again
          </button>
          <div className = "d-flex justify-content-center">
            <Link className="btn btn-secondary form-control m-1" to="/MathFactsSetup">
              Change Settings
            </Link>
            <Link className="btn btn-secondary form-control m-1" to="/">
              Change Game
            </Link>
          </div>
        </div>
        

      </div>
    );
  }


  ////////////////////////////////////////////////////////////////////////////////////////////

  const equationClass = answered ? 'row my-2 fade' : 'row my-2';

  return (
    <div className = "game container d-grid justify-content-center">
      <div className = "row">
        <Label text = {props.operation[0].toUpperCase()} textWeight = "2rem" />
      </div>
      <div className = "row justify-content-center">
        <div className = {equationClass} >
          <Label text = {equation} />
        </div>  
      </div>
      <div className = "row justify-content-center">
        <Answer text = {userAnswer} />
      </div>

      <div className = "row " id = "buttons">
        <div className = "d-flex flex-wrap justify-content-center">
          {numberButtons}
          <ClearButton handleClick = {setUserAnswer}/>
        </div>
      </div>

      <div className = "row">
        <Score score = {score}/>
      </div>
      <div className = "row">
        <Timer totalTime={gameLength} Time = {Time} setTime={setTime} />
      </div>
      <KeyboardNumbers setUserAnswer={setUserAnswer} />
    </div>
  )
}

export default MathFactsGame;