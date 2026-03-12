import { useRuntimeConfig } from '#imports';

export function useSiteUrl(): string {
    return useRuntimeConfig().public.siteUrl as string;
}
