/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: ['class'],
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
              background: "hsl(var(--background))",
              foreground: "hsl(var(--foreground))",
              card: "hsl(var(--card))",
              cardForeground: "hsl(var(--card-foreground))",
              divider: "hsl(var(--divider))",
              popover: "hsl(var(--popover))",
              popoverForeground: "hsl(var(--popover-foreground))",
              border: "hsl(var(--border))",
              input: "hsl(var(--input))",
              ring: "hsl(var(--ring))",
              radius: {
                lg: "var(--radius-lg)",
                md: "var(--radius-md)",
                sm: "var(--radius-sm)",
              },
              primary: {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
              },
              secondary: {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
              },
              muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
              },
              accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
              },
              destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
              },
              border: "hsl(var(--border))",
              input: "hsl(var(--input))",
              ring: "hsl(var(--ring))",
              shadow: "hsl(var(--shadow))",
              shadowColor: "hsl(var(--shadow-color))",
              shadowStrength: "hsl(var(--shadow-strength))",
              radius: {
                lg: "var(--radius-lg)",
                md: "var(--radius-md)",
                sm: "var(--radius-sm)",
              },
            },
            borderRadius: {
              lg: "var(--radius-lg)",
              md: "var(--radius-md)",
              sm: "var(--radius-sm)",
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                'fade-up': {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(20px)"
                    },
                    "80%": {
                        opacity: ".7",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)"
                    }
                },
                'fade-down': {
                    "0%": {
                        opacity: "1",
                        transform: "translateY(0)"
                    },
                    "80%": {
                        opacity: ".7",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "translateY(20px)"
                    }
                },
                'fade-in': {
                    "0%": {
                        opacity: "0",
                    },
                    '50%': {
                        opacity: "0.6",
                    },
                    "100%": {
                        opacity: "1",
                    }
                },
                'fade-out': {
                    "0%": {
                        opacity: "1",
                    },
                    '50%': {
                        opacity: "0.6",
                    },
                    "100%": {
                        opacity: "0",
                    }
                },
                
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'fade-up': 'fade-up 0.3s ease-out',
            'fade-down': 'fade-down 0.3s ease-out',
            'fade-in': 'fade-in 0.3s ease-out',
            'fade-out': 'fade-out 0.3s ease-out',
        },
  
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}