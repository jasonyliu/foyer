import { describe, expect, it } from 'vitest'
import { formatUpdated } from './format'

const now = new Date('2026-07-13T12:00:00Z')
const daysAgo = (n: number) => new Date(now.getTime() - n * 86_400_000)

describe('formatUpdated', () => {
  it('same day is today', () => {
    expect(formatUpdated(daysAgo(0), now)).toBe('today')
  })
  it('one day is yesterday', () => {
    expect(formatUpdated(daysAgo(1), now)).toBe('1 day ago')
  })
  it('under a month counts days', () => {
    expect(formatUpdated(daysAgo(12), now)).toBe('12 days ago')
  })
  it('under a year counts months', () => {
    expect(formatUpdated(daysAgo(65), now)).toBe('2 months ago')
  })
  it('beyond a year counts years', () => {
    expect(formatUpdated(daysAgo(800), now)).toBe('2 years ago')
  })
})
