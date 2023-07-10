const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./templates/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Grenette Variable Proportional Pro"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        salvo: '#22c1c3',
      },
    }
  }
}
