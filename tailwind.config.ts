import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CLASSIC NORDIC PALETTE
        nordic: {
          // Primary - Main brand color
          pine: '#005d54',
          'pine-dark': '#004840',
          'pine-light': '#007a6e',
          
          // Secondary - Accent color
          fjord: '#1269C7',
          'fjord-dark': '#0e52a0',
          'fjord-light': '#1a7de8',
          
          // Success/Nature accent
          forest: '#228B22',
          'forest-dark': '#1a6b1a',
          'forest-light': '#2ea52e',  // Lysere grønn for CTA
          'forest-bright': '#3dd63d', // Enda lysere for hover
          
          // Neutral colors
          slate: '#2E3A3F',
          'slate-light': '#4a5961',
          'slate-dark': '#1f2629',
          
          // Background colors
          snow: '#F7F7F7',
          mist: '#FAFAFA',
          white: '#FFFFFF',
          
          // Warm accent (minimal use)
          birch: '#C8B39A',
          'birch-light': '#d4c4ae',
          'birch-dark': '#b39e85',
        },
        
        // Semantic colors
        success: '#228B22',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#1269C7',
      },
      
fontFamily: {
  sans: ['var(--font-space-mono)', 'Courier New', 'monospace'],
  display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-space-mono)', 'Courier New', 'monospace'],
},
      
      fontSize: {
        // Display sizes
        'display-2xl': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-xl': ['60px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '800' }],
        'display-md': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-sm': ['30px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        
        // Heading sizes
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['30px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'h6': ['18px', { lineHeight: '1.5', fontWeight: '600' }],
        
        // Body sizes
        'body-xl': ['20px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-xs': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      
      spacing: {
        // 4px baseline grid
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
      },
      
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        'full': '9999px',
      },
      
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
        'md': '0 4px 12px 0 rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 24px 0 rgba(0, 0, 0, 0.12)',
        'xl': '0 12px 40px 0 rgba(0, 0, 0, 0.15)',
        '2xl': '0 20px 60px 0 rgba(0, 0, 0, 0.2)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      
      transitionDuration: {
        '400': '400ms',
      },
      
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}

export default config
