import { useState } from 'react'
import Header from './components/Header/Header'
import Buttons from './components/Buttons/Buttons'
import './App.css'

export default function App() {
  // state
  const [displayNum, setDisplayNum] = useState('')
  const [calcArr, setCalcArr] = useState([])
  const [result, setResult] = useState(0)

  return (
    <div className='flex bg-teal-400 w-screen h-screen'>
      <div id='calc' className='bg-main w-3/6 m-auto px-3 py-4 flex flex-col gap-y-4 max-w-sm rounded-lg min-w-fit'>
        <Header />
        <div id='num-display' className='bg-keypad rounded-lg text-right px-8 py-2 font-bold text-4xl'>
          <span>{displayNum ? displayNum : result ? result.toString() : '0'}</span>
        </div>
        <Buttons 
          displayNum={displayNum}
          setDisplayNum={setDisplayNum}
          calcArr={calcArr}
          setCalcArr={setCalcArr}
          result={result}
          setResult={setResult}
        />
      </div>
    </div>
  );
}