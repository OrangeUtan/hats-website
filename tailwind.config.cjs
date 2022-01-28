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
				bg: 'var(--color-bg)',

				// Text colors
				'txt-primary': 'var(--color-txt-primary)',
				'txt-secondary': 'var(--color-txt-secondary)',

				// Border colors
				'border-primary': 'var(--color-border-primary)',
				'border-secondary': 'var(--color-border-secondary)',

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
				DEFAULT: '.2rem'
			}
		}
	}
};
