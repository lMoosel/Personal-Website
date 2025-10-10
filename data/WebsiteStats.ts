// Minimal client-safe stub for WebsiteStats module.
// Actual reads/writes should happen server-side via /api/website-stats.

export async function updateRecord(record: string, value: any): Promise<void> {
  // Client code should call the server API instead.
  await fetch('/api/website-stats', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ record, value }),
  })
}

export async function getWebsiteStats(): Promise<any> {
  const res = await fetch('/api/website-stats', { method: 'GET' })
  if (!res.ok) throw new Error('Failed to fetch website stats')
  return res.json()
}
