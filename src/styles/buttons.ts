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
      opacity: 0.8,
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
    borderRadius: '12px',
    padding: '12px 20px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',

    ...typos['.font-title-16'],
  },
  '.button-medium': {
    borderRadius: '10px',
    padding: '12px 16px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',

    ...typos['.font-body-14'],
  },
  '.button-small': {
    borderRadius: '8px',
    padding: '6px 12px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',

    ...typos['.font-body-13'],
  },
};

const buttons = {
  ...buttonStyles,
  ...buttonSizes,
};

export default buttons;
