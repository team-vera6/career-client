const globalColors = {
  neutral: {
    95: '#1C1D1E',
    90: '#292A2D',
    80: '#4D4F52',
    70: '#66696E',
    60: '#808389',
    50: '#999CA1',
    40: '#B3B5B8',
    30: '#CECECE',
    20: '#E1E1E1',
    10: '#EFEFEF',
    white: '#FFFFFF',
  },
  red: {
    90: '#451305',
    80: '#7F270F',
    70: '#C02C02',
    60: '#E33302',
    50: '#FF3D0D',
    40: '#FF5C37',
    30: '#FF8A70',
    20: '#FFB8A9',
    10: '#FFDDD4',
    5: '#FFF2EF',
  },
  green: {
    90: '#1C4B00',
    80: '#245F00',
    70: '#348700',
    60: '#43B000',
    50: '#5FD915',
    40: '#7FFF30',
    30: '#ADFF7B',
    20: '#C4FFA0',
    10: '#DBFFC5',
    5: '#F2FFEA',
  },
  transparent: 'transparent',
};

const semanticColors = {
  text: {
    strong: '#292A2D',
    normal: '#66696E',
    neutral: '#999CA1',
    assistive: '#CECECE',
    invert: '#FFFFFF',
    primary: '#FF3D0D',
  },
  surface: {
    foreground: '#FFFFFF',
    background: '#EFEFEF',
    base: '#E1E1E1',
    accent: '#999CA1',
    alternative: '#4D4F52',
    invert: '#1C1D1E',
    strong: '#E33302',
    normal: '#FF3D0D',
    light: '#FF5C37',
    blank: 'transparent',
    dimmer: '#00000080',
    assistive: '#00000014',
  },
  line: {
    normal: '#CECECE',
    normalHover: '#B3B5B8',
    assistive: '#EFEFEF',
    focus: '#FF5C37',
  },
  button: {
    primary: '#1C1D1E',
    primaryHover: '#4D4F52',
    secondary: '#E1E1E1',
    secondaryHover: '#CECECE',
    disabled: '#EFEFEF',
  },
  state: {
    positive: '#43B000',
    caution: '#FFD02A',
    negative: '#E20000',
  },
};

const colors = {
  ...globalColors,
  ...semanticColors,
};

export default colors;
