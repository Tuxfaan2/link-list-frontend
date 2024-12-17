import type { CreateLinkItemRequest, LinkItem, MeilisearchLinkResponse } from '@/types/LinkTypes'
import { Meilisearch } from 'meilisearch'

export function useLinkListApi() {
  const meilisearchClient = new Meilisearch({
    host: 'http://localhost:7700',
    apiKey: 'tuxfan123',
  })

  async function createLinkItem(req: CreateLinkItemRequest): Promise<LinkItem> {
    const resp = await fetch('/api/create-link', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    })
    return resp.json()
  }

  async function getLinkItems(): Promise<LinkItem[]> {
    const resp = await fetch('/api/links', {
      method: 'GET',
    })
    return resp.json()
  }

  async function searchLinkItems(query: string): Promise<MeilisearchLinkResponse> {
    const index = await meilisearchClient.getIndex('links')
    return JSON.parse(JSON.stringify(await index.search(query)))
  }

  return { createLinkItem, getLinkItems, searchLinkItems }
}
