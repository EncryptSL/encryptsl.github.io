export function formatDate(iso: string | null) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('cs-CZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}