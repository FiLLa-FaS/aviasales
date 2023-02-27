const API_BASE = 'https://aviasales-test-api.kata.academy'

async function getResource(base, url) {
  const res = await fetch(`${base}${url}`)

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`)
  }
  const body = await res.json()
  return body
}

export async function getSearchId() {
  const res = await getResource(API_BASE, '/search')
  return res
}

export async function getSearchTickets(searchId) {
  const res = await getResource(API_BASE, `/tickets?searchId=${searchId.searchId}`)
  return res
}
