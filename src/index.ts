import plugin from 'tailwindcss/plugin';
import { keyframes, animations } from './animations';

export const animationPlugin = plugin(
    function ({ addUtilities, matchUtilities, theme }) {
        // 1. Inyectar animaciones base como utilidades (ej: animate-bounce-fade)
        const newUtilities = Object.entries(animations).reduce((acc, [name, value]) => {
            acc[`.animate-${name}`] = { animation: value };
            return acc;
        }, {} as Record<string, Record<string, string>>);

        addUtilities(newUtilities);

        // 2. (Opcional) Soporte para utilidades dinámicas con valores arbitrarios (ej: animate-duration-[2s])
        matchUtilities(
            {
                'animate-duration': (value) => ({
                    animationDuration: value,
                }),
                'animate-delay': (value) => ({
                    animationDelay: value,
                }),
            },
            { values: theme('transitionDuration') }
        );
    },
    {
        // Extender el tema por defecto agregando los keyframes
        theme: {
            extend: {
                keyframes,
            },
        },
    }
);

export default animationPlugin;