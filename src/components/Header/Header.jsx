import { useState } from 'react';

export default function Header () {
  const [theme, setTheme] = useState('1');

  return (
    <header className='flex justify-between items-center'>
      <h1 className='font-bold text-2xl'>calc</h1>
      <div id="theme-selector" className='flex gap-4 items-center'>
        <h2 className='font-bold ml-12'>Theme</h2>
        <div className='flex gap-4 bg-keypad px-2 py-1 rounded-lg w-16 relative'>
          <input 
            type='range'
            min='1'
            max='3'
            value={theme}
            className='cursor-pointer rounded-full h-3'
            onChange={e => setTheme(e.target.value)}
          > 
          </input>
        </div>
      </div>
    </header>
  );
}