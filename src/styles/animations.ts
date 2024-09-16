export const keyframes = {
  fadeUp: {
    from: {
      opacity: '0',
      transform: 'translateY(1.5rem)',
    },
    to: {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },
  slideInRight: {
    from: {
      transform: 'translateX(37.5rem)',
    },
    to: {
      transform: 'translateX(0)',
    },
  },
};

export const animation = {
  'fade-up': 'fadeUp 0.2s ease-out',
  'slide-in-right': 'slideInRight 0.3s ease-in-out',
};
