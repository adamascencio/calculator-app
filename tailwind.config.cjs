/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: 'var(--bg-main)',
        keypadBg: 'var(--bg-keypad)',
        screen: 'var(--bg-screen)',
        delResetKeys: 'var(--bg-delResetKeys)',
        keys: 'var(--bg-keys)',
        keyShadow: 'var(--keyShadow)',
        equalsKey: 'var(--equalsKey)',
        textColor: 'var(--textColor)',
        opKeyColor: 'var(--opKeyColor)',
        keyRed: 'hsl(6, 63%, 50%)',
        keyDarkRed: 'hsl(6, 70%, 34%)',
      },
      fontSize: {
        keySize: 'clamp(1rem, 6vw, 2rem)',
      },
    },
  },
  plugins: [],
}
