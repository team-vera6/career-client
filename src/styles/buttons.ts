import colors from './colors';
import typos from './typographys';

const buttonStyles = {
  '.button-primary': {
    backgroundColor: colors.button.primary,
    color: colors.text.invert,

    '&:hover': {
      backgroundColor: colors.button.primaryHover,
    },
    '&:disabled': {
      backgroundColor: colors.button.disabled,
      color: colors.text.neutral,
    },
  },
  '.button-secondary': {
    backgroundColor: colors.button.secondary,
    color: colors.text.strong,

    '&:hover': {
      backgroundColor: colors.button.secondaryHover,
    },
    '&:disabled': {
      backgroundColor: colors.button.disabled,
      color: colors.text.neutral,
    },
  },
  '.button-line': {
    backgroundColor: colors.surface.blank,
    border: `1px solid ${colors.line.normal}`,
    color: colors.text.strong,

    '&:hover': {
      backgroundColor: colors.surface.assistive,
      opacity: '0.8',
    },
    '&:disabled': {
      backgroundColor: colors.surface.blank,
      color: colors.text.neutral,
    },
  },
  '.button-text': {
    backgroundColor: colors.surface.blank,
    color: colors.text.normal,

    '&:hover': {
      backgroundColor: colors.surface.assistive,
    },
    '&:disabled': {
      backgroundColor: colors.surface.blank,
      color: colors.text.neutral,
    },
  },
};

const buttonSizes = {
  '.button-large': {
    borderRadius: '.75rem',
    padding: '.75rem 1.25rem',
    height: '3rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem',

    ...typos['.font-title-16'],
  },
  '.button-medium': {
    borderRadius: '.625rem',
    padding: '.75rem 1rem',
    height: '2.75rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.375rem',

    ...typos['.font-body-14'],
  },
  '.button-small': {
    borderRadius: '.5rem',
    padding: '.375rem .75rem',
    height: '2rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.25rem',

    ...typos['.font-body-13'],
  },
};

const buttons = {
  ...buttonStyles,
  ...buttonSizes,
};

export default buttons;
