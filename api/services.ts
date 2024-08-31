import qs from "qs";
import { GetPagedItemsQueryParams, PagedItemsResponse } from "@/api/types";
import { extractIdFromUrl } from "@/api/helpers";

export const getPagedPokemonList = async (
  params: GetPagedItemsQueryParams = {},
) => {
  const queryParams = qs.stringify(params, { addQueryPrefix: true });
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${queryParams}`,
    );
    const data = (await response.json()) as PagedItemsResponse;
    data.results = data.results.map((item) => ({
      ...item,
      id: extractIdFromUrl(item.url),
    }));
    return { data };
  } catch (error) {
    return { error };
  }
};
