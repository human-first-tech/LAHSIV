// Prepends the Astro `base` path to an absolute internal URL so
// the site works at https://human-first-tech.github.io/LAHSIV/
// as well as on a root domain.
export const url = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  const trimmed = base.endsWith('/') ? base.slice(0, -1) : base;
  return path.startsWith('/') ? `${trimmed}${path}` : `${trimmed}/${path}`;
};
