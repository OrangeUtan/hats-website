import { derived, writable } from 'svelte/store';
import type { Writable, Readable } from 'svelte/store';

export const languageCode: Writable<string> = writable('en_us');

export const language: Writable<Record<string, string>> = writable({});

export async function fetchLanguage(fetch: FetchFunction, languageCode: string) {
	const url = `https://orangeutan.github.io/Hats/api/lang/${languageCode}.json`;
	const res = await fetch(url);

	if (!res.ok) {
		return res;
	}

	language.set(await res.json());

	return res;
}
