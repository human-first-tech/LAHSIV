/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0F4C5C',
          deep: '#0F4C5C',
        },
        coral: {
          DEFAULT: '#E36414',
        },
        sand: {
          DEFAULT: '#FFF3B0',
        },
        ink: '#1A1A1A',
        stone: {
          DEFAULT: '#6B7280',
        },
        mist: '#F9FAFB',
        forest: '#2D6A4F',
        ash: '#E5E7EB',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '600' }],
        'h2': ['2.5rem', { lineHeight: '1.15', fontWeight: '600' }],
        'h3': ['1.75rem', { lineHeight: '1.2', fontWeight: '500' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1.0625rem', { lineHeight: '1.65', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'section': '6rem',
        'section-mobile': '4rem',
      },
      boxShadow: {
        'card-hover': '0 10px 25px -5px rgba(15, 76, 92, 0.08), 0 8px 10px -6px rgba(15, 76, 92, 0.05)',
      },
    },
  },
  plugins: [],
};
