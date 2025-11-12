import type { CreateLinkItemRequest, LinkItem, MeilisearchLinkResponse } from '@/types/LinkTypes';
import { useToken } from '@/composables/useToken';

export function useLinkListApi() {
  const { getOrRefreshToken } = useToken();

  async function createLinkItem(req: CreateLinkItemRequest): Promise<LinkItem> {
    const resp = await fetch('/backend/api/v1/link', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getOrRefreshToken()}`,
      },
      body: JSON.stringify(req),
    });

    return resp.json();
  }

  async function searchLinkItems(query: string): Promise<MeilisearchLinkResponse> {
    const token = await getOrRefreshToken();
    console.log(token);
    const resp = await fetch('/backend/api/v1/search-link', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ q: query }),
    });

    return resp.json();
  }

  async function deleteLinkItem(linkId: number): Promise<LinkItem> {
    const token = await getOrRefreshToken();
    const resp = await fetch('/backend/api/v1/link/' + linkId, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return resp.json();
  }

  return { createLinkItem, searchLinkItems, deleteLinkItem };
}
