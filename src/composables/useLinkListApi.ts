import type { CreateLinkItemRequest, LinkItem } from '@/types/LinkTypes';
import { useToken } from '@/composables/useToken';
import { ref } from 'vue';
import {
  Configuration,
  LinkApi,
  MeilisearchApi,
  type MeilisearchLinkSearchResponse,
} from '@tuxfaan2/link-list-api';

export function useLinkListApi() {
  const { getOrRefreshToken } = useToken();
  const configuration = new Configuration({
    accessToken: async () => {
      return await getOrRefreshToken();
    },
    basePath: '/backend',
  });

  const meilisearchApiClient = ref<MeilisearchApi>(new MeilisearchApi(configuration));

  const linkApiClient = ref<LinkApi>(new LinkApi(configuration));

  async function createLinkItem(req: CreateLinkItemRequest): Promise<LinkItem> {
    return linkApiClient.value.createLinkItem({ createLinkItemRequest: req });
  }

  async function searchLinkItems(query: string): Promise<MeilisearchLinkSearchResponse> {
    return await meilisearchApiClient.value.searchForLinks({
      meilisearchSearchRequest: { q: query },
    });
  }

  async function deleteLinkItem(linkId: number): Promise<LinkItem> {
    return linkApiClient.value.deleteLinkItem({ linkId });
  }

  return { createLinkItem, searchLinkItems, deleteLinkItem };
}
