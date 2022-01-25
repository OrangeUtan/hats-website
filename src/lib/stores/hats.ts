import { derived, get, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { isEmptyObject } from '$lib/utils';

interface HatJson {
	type: string;
	cmd: number;
	lore?: string[];
	additional_nbt?: Record<string, unknown>;
}

export interface Hat {
	type: string;
	cmd: number;
	name: string;
	lore?: string[];
	additional_nbt?: Record<string, unknown>;
}

export const categories: Writable<Record<string, Hat[]>> = writable({});
export const hats = derived(
	categories,
	($categories) => {
		return Object.values($categories).reduce((prev: Record<string, Hat>, curr) => {
			return { ...prev, ...Object.fromEntries(curr.map((hat) => [hat.type, hat])) };
		}, {});
	},
	{}
);

export async function fetchCategories(force = false): Promise<Record<string, Hat[]>> {
	const currentVal = get(categories);
	if (!force && !isEmptyObject(currentVal)) {
		return currentVal;
	}

	const url = 'https://orangeutan.github.io/Hats/api/hats_by_category.json';
	const res = await fetch(url);
	const categoriesJson: Record<string, HatJson[]> = await res.json();
	const data = Object.fromEntries(
		Object.entries(categoriesJson).map(([category, hats]) => {
			return [
				category,
				hats.map((hatJson) => {
					return {
						type: hatJson.type,
						cmd: hatJson.cmd,
						name: `item.hats.hat.${hatJson.type}.name`,
						lore: hatJson.lore,
						additional_nbt: hatJson.additional_nbt
					} as Hat;
				})
			];
		})
	);

	categories.set(data);
	return data;
}

export async function fetchHats(force = false): Promise<Record<string, Hat>> {
	const currentVal = get(hats);
	if (!force && !isEmptyObject(currentVal)) {
		return currentVal;
	}

	await fetchCategories((force = true));
	return get(hats);
}

fetchCategories();
