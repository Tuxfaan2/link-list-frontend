export type LinkItem = {
  id: number;
  url: string;
  title: string;
  description: string;
};

export type CreateLinkItemRequest = {
  url: string;
  title: string;
  description: string;
};

export type MeilisearchLinkResponse = {
  hits: LinkItem[];
  limit: number;
  totalPages: number;
  page: number;
};

export type MeilisearchSearchRequest = {
  q: string;
  page: number;
};
