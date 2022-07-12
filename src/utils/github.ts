import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';

export type ReleaseInfo = RestEndpointMethodTypes['repos']['getLatestRelease']['response']['data'];

export async function fetchLatestRelease(
  owner: string,
  repo: string,
  fetch_fn: Fetch = fetch
): Promise<ReleaseInfo> {
  const r = await fetch_fn(`https://api.github.com/repos/${owner}/${repo}/releases/latest`);
  return await r.json();
}
