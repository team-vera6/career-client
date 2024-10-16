import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

import { animation, keyframes } from './src/styles/animations';
import buttons from './src/styles/buttons';
import customColors from './src/styles/colors';
import typos from './src/styles/typographys';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: [
          'var(--font-pretendard)',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif',
        ],
        chakra: ['var(--font-chakra)', 'sans-serif'],
      },
      opacity: {
        blank: '0',
        8: '0.08',
        16: '0.16',
        24: '0.24',
        50: '0.5',
        70: '0.7',
      },
      spacing: {
        0.5: '0.125rem',
        1.5: '0.375rem',
        2.5: '0.625rem',
        3.5: '0.875rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      keyframes,
      animation,
    },
    colors: customColors,
    screens: {
      mobile: { max: '480px' },
      tablet: { min: '481px', max: '768px' },
      laptop: { min: '769px', max: '1024px' },
      desktop: { min: '1025px' },
    },
  },
  plugins: [
    ({ addBase, addUtilities, addComponents }: PluginAPI) => {
      addBase({ html: { fontSize: '16px' } });
      addUtilities(typos);
      addComponents(buttons);
    },
  ],
};
export default config;
