export interface UseMediaQueryOptions {
  /**
   * @default false
   */
  defaultMatches?: boolean;

  matchMedia?: typeof window.matchMedia;

  /**
   * @default false
   */
  noSsr?: boolean;

  ssrMatchMedia?: (query: string) => { matches: boolean };
}
