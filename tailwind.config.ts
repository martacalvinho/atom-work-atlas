import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				/* Dark-first color system */
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Surface system */
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					elevated: 'hsl(var(--surface-elevated))',
					hover: 'hsl(var(--surface-hover))'
				},
				
				/* Brand colors */
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					hover: 'hsl(var(--accent-hover))'
				},
				
				/* Category colors */
				staking: 'hsl(var(--staking))',
				'liquid-staking': 'hsl(var(--liquid-staking))',
				liquidity: 'hsl(var(--liquidity))',
				lending: 'hsl(var(--lending))',
				perps: 'hsl(var(--perps))',
				
				/* Risk colors */
				'risk-unbonding': 'hsl(var(--risk-unbonding))',
				'risk-il': 'hsl(var(--risk-il))',
				'risk-liquidation': 'hsl(var(--risk-liquidation))',
				'risk-contract': 'hsl(var(--risk-contract))',
				'risk-oracle': 'hsl(var(--risk-oracle))',
				
				/* Legacy shadcn compatibility */
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent-compat))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				xl: 'var(--radius-xl)', 
				'2xl': 'var(--radius-xl)',
				md: 'var(--radius)',
				sm: 'var(--radius-sm)'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
			},
			fontSize: {
				display: 'var(--text-display)',
				h2: 'var(--text-h2)', 
				body: 'var(--text-body)',
				meta: 'var(--text-meta)'
			},
			boxShadow: {
				'sm': 'var(--shadow-sm)',
				'DEFAULT': 'var(--shadow)',
				'lg': 'var(--shadow-lg)',
				'subtle-ring': 'var(--ring-subtle)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
