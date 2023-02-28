export default function Header () {
  return (
    <header className='flex justify-between items-center'>
      <h1 className='font-bold text-2xl'>calc</h1>
      <div id="theme-selector" className='flex gap-4 items-center'>
        <h2 className='font-bold ml-12'>Theme</h2>
        <div className='flex gap-x-4 bg-keypad px-4 py-2 rounded-lg '>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </header>
  );
}