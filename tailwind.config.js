// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import { keyframes, animations } from './src/animations.ts';
export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './stories/**/*.{js,ts,jsx,tsx,html}',
    ],
    theme: {
        extend: {
            keyframes: keyframes,
            animation: animations,
        },
    },
    plugins: [
        // Si importas tu plugin localmente:
        // require('./src/index.ts') o import desde TS
    ],
};