import React, {useEffect} from 'react';

function Keyboard({setUserAnswer}) {
  useEffect(() => {
    const getKeyUp = (e) => {
      e.preventDefault(); // prevent the normal behavior of the key
      if (e.keyCode === 32 || e.keyCode === 13) { // space/Enter
        setUserAnswer('');
      }
      if (e.keyCode === 8) { // backspace
        setUserAnswer(prevUserAnswer =>
        prevUserAnswer.substring(0, prevUserAnswer.length - 1));
        }
      for (let i = 0; i <=9; i++) {
        if (e.key == i) {
          setUserAnswer(prevAnswer => String(Number(prevAnswer + i)))
        }
      }
    }
    window.addEventListener('keyup', getKeyUp);

    return () => {
      console.log('hi')
      window.removeEventListener('keyup', getKeyUp)
    }
  }, [])

  return null;
}


export default Keyboard;