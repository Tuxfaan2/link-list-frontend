import type { CreateLinkItemRequest, LinkItem, MeilisearchLinkResponse } from '@/types/LinkTypes';
import Router from '@/router';
import type { TokenType } from '@/types/AuthorizationTypes';

export function useLinkListApi() {
  async function createLinkItem(req: CreateLinkItemRequest): Promise<LinkItem> {
    const resp = await fetch('/backend/api/v1/link', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(req),
    });
    if (resp.status === 401) {
      Router.push('/login');
    }

    return resp.json();
  }

  async function createToken(username: string, password: string): Promise<TokenType> {
    const resp = await fetch('/backend/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(username + ':' + password)}`,
      },
    });
    return resp.json();
  }

  async function searchLinkItems(query: string): Promise<MeilisearchLinkResponse> {
    console.log(localStorage.getItem('token'));
    const resp = await fetch('/backend/api/v1/search-link', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ q: query }),
    });
    if (resp.status === 401) {
      Router.push('/login');
    }

    return resp.json();
  }

  return { createLinkItem, searchLinkItems, createToken };
}
