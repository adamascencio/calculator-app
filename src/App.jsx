import { useReducer } from 'react'
import Header from './components/Header/Header'
import DigitButton from './components/DigitButton/DigitButton'
import OperationButton from './components/OperationButton/OperationButton'
import './App.css'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE: 'delete',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate',
}

function calcReducer(state, { type, payload }) {
  switch (type) {
    case 'add-digit':
      if (payload.digit === '0' && state.currentOperand === '0') return state
      if (payload.digit === '.' && state.currentOperand.includes('.')) return state
      if (state.overwrite) {
        return {
          currentOperand: payload.digit,
          overwrite: false,
        }
      }
      if (state.append) {
        return {
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: payload.digit,
          append: false,
        }
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      }
    case 'choose-operation':
      if (!state.currentOperand) {
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (
        state.currentOperand &&
        state.previousOperand &&
        state.operation
      ) {
        return {
          append: true,
          operation: payload.operation,
          currentOperand: eval(`
            ${state.previousOperand}
            ${state.operation}
            ${state.currentOperand}
          `).toString(),
        }
      }
      
      return {
        previousOperand: state.currentOperand,
        currentOperand: '',
        operation: payload.operation,
      }
    case 'clear':
      return {}
    case 'delete':
      return {
        currentOperand: state.currentOperand.slice(0, -1),
      }
    case 'evaluate':
      if (
          !state.currentOperand || 
          !state.previousOperand || 
          !state.operation
         ) {
          return state
         }
      return {
        overwrite: true,
        currentOperand: eval(`
          ${state.previousOperand} 
          ${state.operation} 
          ${state.currentOperand}
        `).toString(),
      }
  }
} 

const INT_FORMATTER = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
});

function formatOperand(operand) {
  if (!operand) return 
  const [int, dec] = operand.split('.');
  return dec ? `${INT_FORMATTER.format(int)}.${dec}` : INT_FORMATTER.format(int);
}

export default function App() {
  // state
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(calcReducer, {})

  return (
    <div id='calc' className='bg-main h-screen px-6'>
      <div className='grid auto-rows-min content-center gap-y-7 relative max-w-lg m-auto h-screen'>
        <Header />
        <div id='num-display' className='bg-keypad rounded-lg text-right px-8 py-8 font-bold text-5xl'>
          <span>{currentOperand ? formatOperand(currentOperand) : '0'}</span>
        </div>
        <div id='keypad' className='grid grid-cols-4 text-keySize text-black font-bold justify-items-stretch gap-4 bg-keypad p-4 rounded-lg'>
          <DigitButton digit='7' dispatch={dispatch} />
          <DigitButton digit='8' dispatch={dispatch} />
          <DigitButton digit='9' dispatch={dispatch} />
          <button onClick={() => dispatch({ type: ACTIONS.DELETE })} className='bg-keyBg text-white py-2 rounded-md shadow shadow-keyShadow '>DEL</button>
          <DigitButton digit='4' dispatch={dispatch} />
          <DigitButton digit='5' dispatch={dispatch} />
          <DigitButton digit='6' dispatch={dispatch} />
          <OperationButton operation='+' dispatch={dispatch} />
          <DigitButton digit='1' dispatch={dispatch} />
          <DigitButton digit='2' dispatch={dispatch} />
          <DigitButton digit='3' dispatch={dispatch} />
          <OperationButton operation='-' dispatch={dispatch} />
          <DigitButton digit='.' dispatch={dispatch} />
          <DigitButton digit='0' dispatch={dispatch} />
          <OperationButton operation='/' dispatch={dispatch} />
          <OperationButton operation='*' dispatch={dispatch} />
          <button onClick={() => dispatch({ type: ACTIONS.CLEAR })} className='col-span-2 bg-keyBg text-white py-2 rounded-md shadow shadow-keyShadow '>RESET</button>
          <button onClick={() => dispatch({ type: ACTIONS.EVALUATE })} className='col-span-2 bg-keyRed text-white py-2 rounded-md shadow shadow-keyShadow'>=</button>
        </div>
      </div>
    </div>
  );
}