import { ACTIONS } from '../../App'

export default function DigitButton({ operation, dispatch }) {
  return (
    <button
      className="bg-keys text-opKeyColor py-2 rounded-md shadow shadow-keyShadow"
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      {operation}
    </button>
  );
}