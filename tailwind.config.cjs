module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				brand: 'var(--color-brand)',
				bg: 'var(--color-bg)',
				'on-bg': 'var(--color-on-bg)',
				card: 'var(--color-card)',
				'on-card': 'var(--color-on-card)',
				'card-title': 'var(--color-card-title)',
				'border-card': 'var(--color-border-card)',
				border: 'var(--color-border)',
				'theme-toggle': 'var(--color-theme-toggle)',
				code: 'var(--color-code)',
				tooltip: 'var(--color-tooltip)',
				'on-tooltip': 'var(--color-on-tooltip)',
				'border-tooltip': 'var(--color-border-tooltip)',
				divider: 'var(--color-divider)',
				skeleton: 'var(--color-skeleton)',
				'skeleton-anim': 'var(--color-skeleton-anim)',
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
