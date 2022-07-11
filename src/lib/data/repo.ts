import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

const owner = 'OrangeUtan';
const repo = 'Hats';

export async function fetchLatestRelease(
  fetch: Fetch
): Promise<RestEndpointMethodTypes['repos']['getLatestRelease']['response']['data']> {
  const r = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`);
  return await r.json();
}

export const latestRelease: Writable<
  RestEndpointMethodTypes['repos']['getLatestRelease']['response']['data']
> = writable();
