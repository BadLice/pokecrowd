export type GetPagedItemsQueryParams = {
  limit?: number;
  offset?: number;
};

export type ListItem = {
  name: string;
  url: string;
  id: number;
};

export type PagedItemsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ListItem[];
};
