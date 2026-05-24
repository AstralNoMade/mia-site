const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prepend the configured basePath to a public-folder asset path. */
export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE}${path}`;
}
