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

export const hats: Writable<Record<string, Hat>> = writable({});

export async function updateHatData(
	fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>
): Promise<Response> {
	const url = 'https://orangeutan.github.io/Hats/api/hats.json';
	const res = await fetch(url);

	if (!res.ok) {
		return res;
	}

	const hatsJson: Record<string, HatJson> = await res.json();

	const hatsData = Object.fromEntries(
		Object.entries(hatsJson).map(([type, hatJson]) => {
			return [
				type,
				{
					...hatJson,
					name: `item.hats.hat.${hatJson.type}.name`
				}
			];
		})
	);

	hats.set(hatsData);
	return res;
}
