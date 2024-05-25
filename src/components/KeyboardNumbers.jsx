import React, {useEffect} from 'react';

function KeyboardNumbers({setUserAnswer}) {
  useEffect(() => {
    const getKeyUp = (e) => {
      e.preventDefault(); 
      if (e.keyCode === 32 || e.keyCode === 13) { 
        setUserAnswer('');
      }
      if (e.keyCode === 8) { 
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
      window.removeEventListener('keyup', getKeyUp)
    }
  }, [])

  return null;
}


export default KeyboardNumbers;