module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				// Color theme
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)',

				// Text colors
				'on-primary': 'var(--color-on-primary)',
				'on-secondary': 'var(--color-on-secondary)',

				// Border colors
				'border-secondary': 'var(--color-border-secondary)',

				// Card
				card: 'var(--color-card)',
				'on-card': 'var(--color-on-card)',
				'card-title': 'var(--color-card-title)',

				// Skeleton
				skeleton: 'var(--color-skeleton)',
				'skeleton-anim': 'var(--color-skeleton-anim)',

				// Other
				'theme-toggle': 'var(--color-theme-toggle)',
				divider: 'var(--color-divider)',
				'bg-search': 'var(--color-bg-search)'
			},
			transitionDuration: {
				theme: 'var(--duration-theme)'
			},
			borderRadius: {
				DEFAULT: '.25rem'
			}
		}
	}
};
