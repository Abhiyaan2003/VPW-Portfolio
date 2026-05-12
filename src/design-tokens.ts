export const tokens = {
  colors: {
    primary: {
      light: '#f59e0b',
      main: '#d97706',
      dark: '#92400e',
    },
    surface: {
      main: '#0a0d12',
      dim: '#070a0e',
      bright: '#2a303c',
      container: '#141a22',
    },
    text: {
      primary: '#e2e8f0',
      secondary: '#94a3b8',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  animations: {
    fast: 0.15,
    base: 0.25,
    slow: 0.4,
  },
} as const;

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
