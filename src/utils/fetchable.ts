import { writable } from 'svelte/store';

export function fetchable<T>(fetch_data: (fetch_fn: Fetch) => Promise<T>, initial?: T) {
  const { subscribe, set, update } = writable(initial);

  return {
    subscribe,
    set,
    update,
    fetch_data: async (fetch_fn: Fetch) => set(await fetch_data(fetch_fn))
  };
}
