const DAY_MS = 86_400_000

/** Human-relative age of a timestamp, coarse on purpose: portal copy, not a clock. */
export function formatUpdated(updated: Date, now: Date): string {
  const days = Math.floor((now.getTime() - updated.getTime()) / DAY_MS)
  if (days <= 0) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 30) return `${days} days ago`
  const months = Math.floor(days / 30)
  if (months < 12) return months === 1 ? 'a month ago' : `${months} months ago`
  const years = Math.floor(days / 365)
  return years === 1 ? 'a year ago' : `${years} years ago`
}
