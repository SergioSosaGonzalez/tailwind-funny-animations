import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Animaciones/Lista',
};

export default meta;

export const BounceFade: StoryObj = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'p-8 flex justify-center items-center bg-slate-900 rounded-xl';
    container.innerHTML = `
      <div class="animate-bounce-fade px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg">
        Bounce Fade Animation
      </div>
    `;
    return container;
  },
};

export const PulseGlow: StoryObj = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'p-8 flex justify-center items-center bg-slate-900 rounded-xl';
    container.innerHTML = `
      <div class="animate-pulse-glow px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg">
        Pulse Glow Animation
      </div>
    `;
    return container;
  },
};