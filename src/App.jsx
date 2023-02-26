import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App bg-teal-400 w-screen h-screen'>
      <div id='calc' className='bg-main w-3/6 m-auto px-3 py-4 flex flex-col gap-y-4 max-w-sm'>
        <header className='flex justify-between items-center'>
          <h1 className='font-bold text-2xl'>calc</h1>
          <div id="theme-selector" className='flex gap-4 items-center'>
            <h2 className='font-bold'>Theme</h2>
            <div className='flex gap-x-4 bg-keypad px-4 py-2 rounded-lg '>
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
          </div>
        </header>
        <div id='num-display' className='bg-keypad rounded-lg text-right px-8 py-2 font-bold text-4xl'>{count}</div>
        <div id='num-buttons' className='grid grid-cols-4 text-black font-bold place-items-center justify-items-stretch gap-3 bg-keypad p-4'>
          <button id='7' className='bg-keyLightGray'>7</button>
          <button id='8' className='bg-keyLightGray'>8</button>
          <button id='9' className='bg-keyLightGray'>9</button>
          <button id='DEL' className='bg-keyBg text-white'>DEL</button>
          <button id='4' className='bg-keyLightGray'>4</button>
          <button id='5' className='bg-keyLightGray'>5</button>
          <button id='6' className='bg-keyLightGray'>6</button>
          <button id='+' className='bg-keyLightGray'>+</button>
          <button id='1' className='bg-keyLightGray'>1</button>
          <button id='2' className='bg-keyLightGray'>2</button>
          <button id='3' className='bg-keyLightGray'>3</button>
          <button id='-' className='bg-keyLightGray'>-</button>
          <button id='.' className='bg-keyLightGray'>.</button>
          <button id='0' className='bg-keyLightGray'>0</button>
          <button id='/' className='bg-keyLightGray'>/</button>
          <button id='x' className='bg-keyLightGray'>x</button>
          <button id='RESET' className='col-span-2 bg-keyBg text-white'>RESET</button>
          <button id='=' className='col-span-2 bg-keyRed text-white'>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
