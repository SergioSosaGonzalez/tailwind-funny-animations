export const keyframes = {
    'bounce-fade': {
        '0%': { opacity: '0', transform: 'translateY(-20px)' },
        '50%': { opacity: '0.5', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    'pulse-glow': {
        '0%, 100%': { opacity: '1', boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' },
        '50%': { opacity: '0.6', boxShadow: '0 0 5px rgba(59, 130, 246, 0.2)' },
    },
};

export const animations = {
    'bounce-fade': 'bounce-fade 0.8s ease-out forwards',
    'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
};