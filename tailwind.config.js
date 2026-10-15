/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		// O container já traz o espaçamento lateral; não repetir px-* nos filhos.
		container: {
			center: true,
			padding: {
				DEFAULT: '1.25rem',
				sm: '2rem',
				lg: '3rem',
			},
			screens: {
				'2xl': '1240px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				// Paleta da marca GB (extraída do logo oficial)
				brand: {
					green: '#1E7A45',
					'green-dark': '#155C33',
					'green-soft': '#E4F1E9',
					// Verde mais claro para texto sobre fundos azuis
					'green-bright': '#4CC97E',
					blue: '#0F4C81',
					'blue-dark': '#0C3D68',
					'blue-soft': '#E6EEF6',
					// Amarelo de sinalização de segurança, usado como destaque
					amber: '#F5B700',
					'amber-soft': '#FFF3C4',
					navy: '#0B2A47',
					'navy-deep': '#071E35',
					ink: '#1B2733',
					muted: '#4B5A68',
					paper: '#F5F7F6',
					line: '#D9E0E6',
				},
				whatsapp: {
					DEFAULT: '#25D366',
					dark: '#1EBE5A',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
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
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
