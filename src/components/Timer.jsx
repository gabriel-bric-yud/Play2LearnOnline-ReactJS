import React, {useState, useEffect} from 'react';
import Label from './Label.jsx';

function Timer(props) {

  const [timeLeft, setTimeLeft] = useState(props.totalTime)
  let time = props.totalTime

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      time--
      if (time == 0) {
        props.setCheckTime(0)
      }
    }, 1000);

    return () => {
      clearInterval(timer); //cleanup
    }
  }, []);
  
  return (
    <Label text = {`Time: ${timeLeft}`} textWeight = {props.textWeight}/>
  )
}

export default Timer;