import type { Preview } from '@storybook/react';

import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'surface-background',
      values: [
        {
          name: 'clear',
          value: 'transparent',
        },
        {
          name: 'surface-background',
          value: '#f5f5f5',
        },
        {
          name: 'surface-foreground',
          value: '#ffffff',
        },
        {
          name: 'surface-foregroundOn',
          value: '#f0f0f0',
        },
      ],
    },
  },
};

export default preview;
