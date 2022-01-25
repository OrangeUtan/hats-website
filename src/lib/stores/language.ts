import { derived, writable } from 'svelte/store';
import type { Writable, Readable } from 'svelte/store';

export const languageCode: Writable<string> = writable('en_us');

export const language: Readable<Record<string, string>> = derived(
	languageCode,
	($languageCode, set) => {
		fetchLanguage($languageCode).then(set);
	},
	{}
);

const fetchLanguage = async (languageCode: string): Promise<Record<string, string>> => {
	const url = `https://orangeutan.github.io/Hats/api/lang/${languageCode}.json`;
	const res = await fetch(url);
	return await res.json();
};
