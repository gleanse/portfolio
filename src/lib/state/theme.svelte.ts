export type Theme = 'dark' | 'light';

// key must match the inline script in app.html
const STORAGE_KEY = 'theme';

let current = $state<Theme>('dark');

function apply(next: Theme) {
	current = next;
	document.documentElement.dataset.theme = next;
	try {
		localStorage.setItem(STORAGE_KEY, next);
	} catch {
		// storage can be blocked, the theme still applies for this visit
	}
}

export const theme = {
	get current() {
		return current;
	},
	init() {
		current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
	},
	toggle() {
		apply(current === 'dark' ? 'light' : 'dark');
	}
};
