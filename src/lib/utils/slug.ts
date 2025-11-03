export function toSlug(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')     // remove accents (č š ž etc)
    .replace(/[^a-z0-9]+/g, '-')         // non alnum -> -
    .replace(/^-+|-+$/g, '')             // trim hyphens
}