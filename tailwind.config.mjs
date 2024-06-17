/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "1.5rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				display: ["Anton", "sans-serif"],
				logo: ["Tomorrow", "sans-serif"],
			},
			colors: {
				border: "hsl(var(--border))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
			},
			borderRadius: {
				xl: "calc(var(--radius) + 4px)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			animation: {
				"fade-up": "fade-up .5s cubic-bezier(.28,.61,.67,.99)",
				"fade-in": "fade-in 1.2s cubic-bezier(.28,.61,.67,.99)",
				"fade-down": "fade-down 1.2s cubic-bezier(.28,.61,.67,.99)",
			},
			animationDelay: {
				"400": "400ms"
			},
			keyframes: {
				"fade-up": {
					"0%": { opacity: "0", transform: "translateY(1rem)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: ".2" },
				},
				"fade-down": {
					"0%": { transform: 'translate(1rem, -1rem)', opacity: 0 },
					"100%": { transform: 'translate(0)', opacity: 1 }
				}
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}
