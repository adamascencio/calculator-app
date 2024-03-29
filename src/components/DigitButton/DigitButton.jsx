import { ACTIONS } from '../../App'

export default function DigitButton({ digit, dispatch }) {
  return (
    <button
      className="bg-keys text-opKeyColor py-2 rounded-md shadow shadow-keyShadow"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}