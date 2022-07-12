import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';
import { fetchLatestRelease } from '$utils/github';
import { fetchable } from '$utils/fetchable';

export type ReleaseInfo = RestEndpointMethodTypes['repos']['getLatestRelease']['response']['data'];

const owner = 'OrangeUtan';
const repo = 'Hats';

export const latestRelease = fetchable((fetch_fn: Fetch) =>
  fetchLatestRelease(owner, repo, fetch_fn)
);
