import { get, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { isEmptyObject } from '$lib/utils';

export interface HatJson {
	type: string;
	cmd: number;
	category: string;
	tags?: string[];
	lore?: string[];
	nbt?: Record<string, unknown>;
}

export interface Hat {
	type: string;
	cmd: number;
	category: string;
	tags?: string[];
	lore?: string[];
	nbt?: Record<string, unknown>;
	name: string;
}

const hatsStore: Writable<Record<string, Hat>> = writable({});
export { hatsStore as hats };

/**
 * Fetch and parse hats JSON data
 *
 * @param fetch - Fetch implementation
 * @returns Parsed hats data
 */
async function fetchHats(fetch: FetchFunction): Promise<Record<string, Hat>> {
	const url = 'https://orangeutan.github.io/Hats/api/hats.json';
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Failed to load hats: ${res.statusText}`);
	}

	const json: Record<string, HatJson> = await res.json();

	const parsedHatData = Object.fromEntries(
		Object.entries(json).map(([type, hatJson]) => {
			return [
				type,
				{
					...hatJson,
					name: `item.hats.hat.${hatJson.type}.name`
				}
			];
		})
	);

	return parsedHatData;
}

/**
 * Fetch hat data and update hat store.
 * Uses cached value if available.
 *
 * @param force - Ignore cache and fetch regardless
 * @return Current value of hats store
 **/
export async function updateHats(fetch: FetchFunction, force = false): Promise<Record<string, Hat>> {
	const currentValue = get(hatsStore);
	if (!force && !isEmptyObject(currentValue)) {
		return currentValue;
	}

	const newValue = await fetchHats(fetch);
	hatsStore.set(newValue);
	return newValue;
}
