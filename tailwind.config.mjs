export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    'app/**/*.{js,jsx}', // Search in App Folder
    'components/**/*.{js,jsx}', // Search in Components Folder
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Default primary color (light mode)
          dark: '#1E3A8A', // Dark mode primary color
        },
        secondary: {
          DEFAULT: '#DB2777', // Default secondary color (light mode)
          dark: '#BE185D', // Dark mode secondary color
        },
        background: {
          DEFAULT: '#F9FAFB', // Light mode background
          dark: '#1F2937', // Dark mode background
        },
        text: {
          DEFAULT: '#1F2937', // Light mode text
          dark: '#F9FAFB', // Dark mode text
        },
        success: {
          DEFAULT: '#10B981', // Light mode success
          dark: '#059669', // Dark mode success
        },
        warning: {
          DEFAULT: '#F59E0B', // Light mode warning
          dark: '#D97706', // Dark mode warning
        },
        error: {
          DEFAULT: '#EF4444', // Light mode error
          dark: '#DC2626', // Dark mode error
        },
      },
    },
  },
  plugins: [],
};