export default function Buttons ({ displayNum, setDisplayNum, calcArr, setCalcArr, setCount, setOperator }) {
  // event handlers
  const handleNumChange = (e) => {
    const num = e.target.innerText;
    setDisplayNum(formatStr(displayNum + num));
  }

  const handleOperator = (e) => {
    const operator = e.target.innerText;
    const lastNum = calcArr[calcArr.length - 1];
    setOperator(operator);
    setCalcArr([...calcArr, displayNum]);
    setCount(compute(operator, calcArr.length > 1 ? lastNum : displayNum));
    setDisplayNum(count.toString());
  }

  const handleReset = () => {
    setDisplayNum('');
    setCalcArr([]);
    setOperator('');
    setCount(0);
  }

  return (
    <div id='num-buttons' className='grid grid-cols-4 text-black font-bold place-items-center justify-items-stretch gap-3 bg-keypad p-4'>
      <button onClick={handleNumChange} className='bg-keyLightGray'>7</button>
      <button onClick={handleNumChange} className='bg-keyLightGray'>8</button>
      <button onClick={handleNumChange} className='bg-keyLightGray'>9</button>
      <button className='bg-keyBg text-white'>DEL</button>
      <button onClick={handleNumChange} className='bg-keyLightGray'>4</button>
      <button onClick={handleNumChange} className='bg-keyLightGray'>5</button>
      <button onClick={handleNumChange} className='bg-keyLightGray'>6</button>
      <button onClick={handleOperator} className='bg-keyLightGray'>+</button>
      <button onClick={handleNumChange} className='bg-keyLightGray'>1</button>
      <button onClick={handleNumChange} className='bg-keyLightGray'>2</button>
      <button onClick={handleNumChange} className='bg-keyLightGray'>3</button>
      <button onClick={handleOperator} className='bg-keyLightGray'>-</button>
      <button onClick={handleNumChange} className='bg-keyLightGray'>.</button>
      <button onClick={handleNumChange} className='bg-keyLightGray'>0</button>
      <button onClick={handleOperator} className='bg-keyLightGray'>/</button>
      <button onClick={handleOperator} className='bg-keyLightGray'>x</button>
      <button onClick={handleReset} className='col-span-2 bg-keyBg text-white'>RESET</button>
      <button className='col-span-2 bg-keyRed text-white'>=</button>
    </div>
  );
}