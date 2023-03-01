import { useEffect } from 'react';

export default function Buttons ({ displayNum, setDisplayNum, calcArr, setCalcArr, result, setResult }) {
  // constants
  const OPERATORS = ['+', '-', '/', '*'];

  // useEffect
  useEffect(() => {
    const lastIdx = calcArr.length - 1;
    OPERATORS.includes(calcArr[lastIdx]) ?
      setResult(eval(calcArr.slice(0, -1).join('')))
      : 
      setResult(eval(calcArr.join('')))
  }, [calcArr]);

  // helper functions
  const checkForDecimal = (numStr) => {
    const regex = /[.]+/g;
    return regex.test(numStr);
  }

  // event handlers
  const handleNumChange = (e) => {
    const char = e.target.value;
    const lastChar = displayNum[displayNum.length - 1];
    if (
        OPERATORS.includes(char) && displayNum === '' ||
        OPERATORS.includes(char) && OPERATORS.includes(lastChar) ||
        char === '.' && checkForDecimal(displayNum)
    ) return;

    if (OPERATORS.includes(char)) {
      setCalcArr([...calcArr, displayNum, char]) 
      setDisplayNum('');
    }
    
    if (!OPERATORS.includes(char)) setDisplayNum(displayNum + char);
  }

  const handleReset = () => {
    setDisplayNum('');
    setCalcArr([]);
    setResult(0);
  }

  return (
    <div id='num-buttons' className='grid grid-cols-4 text-black font-bold place-items-center justify-items-stretch gap-3 bg-keypad p-4'>
      <button value='7' onClick={handleNumChange} className='bg-keyLightGray'>7</button>
      <button value='8' onClick={handleNumChange} className='bg-keyLightGray'>8</button>
      <button value='9' onClick={handleNumChange} className='bg-keyLightGray'>9</button>
      <button value='DEL' className='bg-keyBg text-white'>DEL</button>
      <button value='4' onClick={handleNumChange} className='bg-keyLightGray'>4</button>
      <button value='5' onClick={handleNumChange} className='bg-keyLightGray'>5</button>
      <button value='6' onClick={handleNumChange} className='bg-keyLightGray'>6</button>
      <button value='+' onClick={handleNumChange} className='bg-keyLightGray'>+</button>
      <button value='1' onClick={handleNumChange} className='bg-keyLightGray'>1</button>
      <button value='2' onClick={handleNumChange} className='bg-keyLightGray'>2</button>
      <button value='3' onClick={handleNumChange} className='bg-keyLightGray'>3</button>
      <button value='-' onClick={handleNumChange} className='bg-keyLightGray'>-</button>
      <button value='.' onClick={handleNumChange} className='bg-keyLightGray'>.</button>
      <button value='0' onClick={handleNumChange} className='bg-keyLightGray'>0</button>
      <button value='/' onClick={handleNumChange} className='bg-keyLightGray'>/</button>
      <button value='*' onClick={handleNumChange} className='bg-keyLightGray'>x</button>
      <button value='RESET' onClick={handleReset} className='col-span-2 bg-keyBg text-white'>RESET</button>
      <button value='=' onClick={() => setCalcArr([...calcArr, displayNum])} className='col-span-2 bg-keyRed text-white'>=</button>
    </div>
  );
}