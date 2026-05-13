export const tokens = {
  colors: {
    primary: {
      light: '#2D6A4F', // Muted Hunter
      main: '#1B4332',  // Hunter Green
      dark: '#081C15',  // Deep Dark
    },
    surface: {
      main: '#FFFFFF',      // Pure White
      dim: '#F8FAFC',       // Slate-50
      bright: '#F1F5F9',    // Slate-100
      container: '#FFFFFF', // Container White
    },
    text: {
      primary: '#0F172A',   // Slate-900
      secondary: '#475569', // Slate-600
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
