import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import Label from "../components/Label.jsx";
import Score from "../components/Score.jsx";
import Timer from "../components/Timer.jsx";

function AnagramHuntGame(props) {
  const anagrams = {
    5 : [
      [
        "abets",
        "baste",
        "betas",
        "beast",
        "beats"
      ],
      [
        "acres",
        "cares",
        "races",
        "scare"
      ],
      [
        "alert",
        "alter",
        "later"
      ],
      [
        "angel",
        "angle",
        "glean"
      ],
      [
        "baker",
        "brake",
        "break"
      ],
      [
        "bared",
        "beard",
        "bread",
        "debar"
      ],
      [
        "dater",
        "rated",
        "trade",
        "tread"
      ],
      [
        "below",
        "bowel",
        "elbow"
      ],
      [
        "caret",
        "cater",
        "crate",
        "trace",
        "react"
      ]
    ],
    6 : [
      [
        "arrest",
        "rarest",
        "raster",
        "raters",
        "starer"
      ],
      [
        "carets",
        "caters",
        "caster",
        "crates",
        "reacts",
        "recast",
        "traces"
      ],
      [
        "canter",
        "nectar",
        "recant",
        "trance"
      ],
      [
        "danger",
        "gander",
        "garden",
        "ranged"
      ],
      [
        "daters",
        "trades",
        "treads",
        "stared"
      ]
    ],
    7 : [
      [
        "allergy",
        "gallery",
        "largely",
        "regally"
      ],
      [
        "aspired",
        "despair",
        "diapers",
        "praised"
      ],
      [
        "claimed",
        "decimal",
        "declaim",
        "medical"
      ],
      [
        "dearths",
        "hardest",
        "hatreds",
        "threads",
        "trashed"
      ],
      [
        "detains",
        "instead",
        "sainted",
        "stained"
      ]
    ],
    8 : [
      [
        "parroted",
        "predator",
        "prorated",
        "teardrop"
      ],
      [
        "repaints",
        "painters",
        "pantries",
        "pertains"
      ],
      [
        "restrain",
        "retrains",
        "strainer",
        "terrains",
        "trainers"
      ],
      [
        "construe",
        "counters",
        "recounts",
        "trounces"
      ]
    ]
  }

  ////////////////////////////////////////////////////////////////////////////////////////////


  
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState("")
  const [anagramsList, setAnagramsList] = useState(anagrams[props.wordLength])

  /** 
  const TouchScreenAutoSubmit = (e) => {
    checkAnswer(userAnswer)
  }

  window.addEventListener('touchend', TouchScreenAutoSubmit);

  useEffect(() => {
    return () => {
      window.removeEventListener('touchend', TouchScreenAutoSubmit)
    }
  }, [])

  */

  let indexes = []
  for (let i = 0; i < anagramsList.length; i++) {
    indexes.push(i)
  }

  let newAnagramData = getWordList(indexes)
  const [wordList, setWordList] = useState(newAnagramData[0])
  const [availableIndexes, setAvailableIndexes] = useState(newAnagramData[1]);
  const [word, setWord] = useState(randomWord(wordList))

  const [answerValues, setAnswerValues] = useState([])
  const [answerDisplay, setDisplay] = useState([])
  const [remaining, setRemaining] = useState(wordList.length - answerValues - 1)
  
  const gameLength = 60;
  const [Time, setTime] = useState(gameLength);
  const [score, setScore] = useState(0)

  
  function getWordList(indexArray) {
    let listLength = indexArray.length
    let randIndex = Math.floor(Math.random() * listLength)
    let currentAnagramList = anagramsList[indexArray[randIndex]]
    indexArray.splice(randIndex,1)
    return [currentAnagramList, indexArray]
  }

  function randomWord(list = []) {
    return list[Math.floor(Math.random() * list.length)]
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  function checkAnswer(value) {
    if (value.toUpperCase() != word.toUpperCase()) {
      wordList.forEach((elem) => {
        if (value.toUpperCase() === elem.toUpperCase()) {
          setAnswered(true)
          setScore(score + 1)
          answerValues.push(elem)
          setAnswerValues(answerValues)
          wordList.splice(wordList.indexOf(elem),1)
          setDisplay(answerValues.map((val) => 
            <li key = {val}>{val}</li>
          ))

          if (wordList.length == 1) { 
            newAnagramData = getWordList(availableIndexes)
            setWordList(newAnagramData[0])
            setWord(randomWord(newAnagramData[0]))
            setAvailableIndexes(newAnagramData[1])
            setRemaining(newAnagramData[0].length - 1)
          }
          else {
            setWordList(wordList)
            setRemaining(prevRemaining => prevRemaining - 1)
          }

          if (document.querySelector("input") != null) {
            document.querySelector("input").value = ""
          }
        }
      })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  function restart() {
    setAnswered(false)
    setTime(gameLength);
    setScore(0);
    let indexes = []
    for (let i = 0; i < anagramsList.length; i++) {
      indexes.push(i)
    }
    setAvailableIndexes(indexes)
    let newAnagram = getWordList(indexes)
    setWordList(newAnagram[0])
    setRemaining(newAnagram[0].length - 1)
    setWord(randomWord(newAnagram[0]))
    setAnswerValues([])
    setDisplay([])
  }

  if (Time === 0 || availableIndexes.length == 0) {
    let text = ""
    if (Time === 0) {
      text = "Time's Up!"
    }
    else {
      text = "You found them all!"
    }

    return (
      <div className="text-center game my-2">
        <h2>{text}</h2>
        <div style={{fontSize: "1.5em"}}>You Got</div>
        <div style={{fontSize: "5em"}}>{score}</div>
        <div style={{fontSize: "1.5em"}}>Anagrams</div>
        <div className = "card-footer my-2">
          <button className="btn btn-success m-1 form-control w-75"
            onClick={restart}>
              Play Again
          </button>
          <div className = "d-flex justify-content-center">
            <Link className="btn btn-secondary form-control m-1" to="/AnagramHuntSetup">
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
  if (answered) {
    setAnswered(false)
  }
  const fadeDiv = answered ? 'row my-2 fade' : 'row my-2';

  ////////////////////////////////////////////////////////////////////////////////////////////

  return( 
    <div className = "game container d-grid justify-content-center">
      <div className = "d-flex border-bottom justify-content-between top ">
        <Score score = {score}  textWeight = "1.5rem" />
        <Timer totalTime={gameLength} Time = {Time}  setTime={setTime}  textWeight = "1.5rem" />
      </div>

      <div className = "row justify-content-center">
        <div className = {`d-grid align-items-center ${fadeDiv}`}>
          <Label text = {word} textWeight = "3rem" />
          <Label text = {`(${remaining} left)`}textWeight = "1.5rem" />
        </div>
      </div>

      <div className = "row justify-content-center m-2">
        <input type = "text" className = "form-control w-75" placeholder = "type here" 
          onInput = {(e) => { //mobile support on change instead of only enter key
            setUserAnswer(e.target.value);
            if (navigator.userAgentData.mobile == true || (navigator.maxTouchPoints > 0 && (window.screen.width < 768 || window.screen.height < 768))){
              checkAnswer(e.target.value)
            }
            checkAnswer(e.target.value)
          }}
          
          onKeyDown={(e) => {
          if (e.key == "Enter") {
            checkAnswer(e.target.value)
          }
        }} />
      </div>

      <div className = "d-grid justify-content-left">
        <ol className = "text-center">
          {answerDisplay}
        </ol>
      </div>

    </div>
  )
}

export default AnagramHuntGame;