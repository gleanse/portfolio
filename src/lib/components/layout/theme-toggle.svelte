<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '../../state/theme.svelte';

	onMount(() => theme.init());
</script>

<button
	type="button"
	aria-label="toggle theme"
	onclick={() => theme.toggle()}
	class="grid size-9 cursor-pointer place-items-center rounded-full border border-border text-muted transition-colors hover:text-text"
>
	<svg
		class="sun"
		viewBox="0 0 24 24"
		width="18"
		height="18"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="5" />
		<path
			d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
		/>
	</svg>
	<svg
		class="moon"
		viewBox="0 0 24 24"
		width="18"
		height="18"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
	</svg>
</button>

<style>
	.moon {
		display: none;
	}

	:global([data-theme='light']) .sun {
		display: none;
	}

	:global([data-theme='light']) .moon {
		display: block;
	}
</style>
