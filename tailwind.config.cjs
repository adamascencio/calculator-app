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
        // backgrounds
        main: 'hsl(222, 26%, 31%)',
        keypad: 'hsl(223, 31%, 20%)',
        screen: 'hsl(224, 36%, 15%)',
        // keys
        keyBg: 'hsl(225, 21%, 49%)',
        keyShadow: 'hsl(224, 28%, 35%)',
        keyRed: 'hsl(6, 63%, 50%)',
        keyDarkRed: 'hsl(6, 70%, 34%)',
        keyLightGray: 'hsl(30, 25%, 89%)',
        keyGrayOrange: 'hsl(28, 16%, 65%)',
        // text
        darkGray: 'hsl(221, 14%, 31%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontSize: {
        keySize: 'clamp(1rem, 6vw, 2rem)',
      },
    },
  },
  plugins: [],
}
