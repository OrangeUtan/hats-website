<script lang="ts">
	import { theme } from '$stores/theme';
	import IconButton from '$components/IconButton.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import Tooltip from './Tooltip.svelte';

	const [tooltipRef, tooltipContent] = createPopperActions();
	let showTooltip = false;

	function toggleTheme() {
		const newTheme = $theme == 'dark' ? 'light' : 'dark';
		theme.set(newTheme);
		document.documentElement.dataset.theme = newTheme;
	}

	let isDarkThemeActive: boolean;
	$: isDarkThemeActive = $theme === 'dark';

	let switchThemeMsg: string;
	$: switchThemeMsg = isDarkThemeActive ? 'Switch to light theme' : 'Switch to dark theme';
</script>

<IconButton
	use={[[tooltipRef]]}
	on:click={toggleTheme}
	on:mouseenter={() => (showTooltip = true)}
	on:mouseleave={() => (showTooltip = false)}
>
	{#if isDarkThemeActive}
		<svg class="text-theme-toggle" aria-label="Apply dark theme" fill="currentColor" viewBox="0 0 20 20"
			><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg
		>
	{:else}
		<svg class="text-theme-toggle" aria-label="Apply light theme" fill="currentColor" viewBox="0 0 20 20"
			><path
				fill-rule="evenodd"
				d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
				clip-rule="evenodd"
			/></svg
		>
	{/if}
</IconButton>

{#if showTooltip}
	<Tooltip
		popperAction={tooltipContent}
		popperOptions={{
			placement: 'bottom',
			modifiers: [{ name: 'offset', options: { offset: [0, 4] } }]
		}}>{switchThemeMsg}</Tooltip
	>
{/if}

<style lang="scss">
	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
