/// <reference types="@sveltejs/kit" />

type FetchFunction = (input: RequestInfo, init?: RequestInit) => Promise<Response>;
