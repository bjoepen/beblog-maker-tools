export function parseDecimal(value: string): number {
  const normalized = value.trim().replace(',', '.');
  return Number(normalized);
}

export function formatNumber(value: number, digits = 3): string {
  if (!Number.isFinite(value)) return '—';
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  }).format(value);
}
