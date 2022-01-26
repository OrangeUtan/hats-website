import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';

export type Language = Record<string, string>;

const languageCodeStore: Writable<string> = writable();
const languageStore: Writable<Language> = writable({});
const languageCache: Record<string, Language> = {};

export { languageCodeStore as languageCode, languageStore as language };

/**
 * Fetch language translations for hats
 * @param fetch - Fetch implementation
 * @param languageCode - The language code (e.g. en_us)
 */
async function fetchLanguage(fetch: FetchFunction, languageCode: string): Promise<Language> {
	const url = `https://orangeutan.github.io/Hats/api/lang/${languageCode}.json`;
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Failed to load language '${languageCode}': ${res.statusText}`);
	}

	return await res.json();
}

/**
 * Fetch and set the current language.
 * Uses cached value if available.
 *
 * @param fetch - Fetch implementation
 * @param languageCode - The language code (e.g. en_us)
 */
export async function setLanguage(fetch: FetchFunction, languageCode: string) {
	if (get(languageCodeStore) === languageCode) {
		return;
	}

	if (languageCode in languageCache) {
		languageStore.set(languageCache[languageCode]);
	} else {
		const lang = await fetchLanguage(fetch, languageCode);
		languageStore.set(lang);
		languageCache[languageCode] = lang;
	}

	languageCodeStore.set(languageCode);
}
