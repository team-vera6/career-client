import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

import buttons from './src/styles/buttons';
import customColors from './src/styles/colors';
import typos from './src/styles/typographys';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        designer: ['var(--font-designer)', 'system-ui', 'Roboto', 'sans-serif'],
      },
    },
    colors: customColors,
  },
  plugins: [
    ({
      addUtilities,
      addComponents,
    }: {
      addUtilities: PluginAPI['addUtilities'];
      addComponents: PluginAPI['addComponents'];
    }) => {
      addUtilities(typos);
      addComponents(buttons);
    },
  ],
};
export default config;
