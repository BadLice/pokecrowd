import { useCallback, useEffect, useState } from "react";
import { getPagedPokemonList } from "@/api/services";
import { ListItem } from "@/api/types";

const ITEMS_PER_PAGE = 20;

export const usePokemonList = () => {
  const [items, setItems] = useState<ListItem[]>();
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchItems = useCallback(async () => {
    setIsLoading(true);
    const response = await getPagedPokemonList({
      limit: ITEMS_PER_PAGE,
      offset: ITEMS_PER_PAGE * page,
    });
    if (!response.data) return; //TODO
    setItems((currentItems) => [
      ...(currentItems ?? []),
      ...response.data.results,
    ]);
    setIsLoading(false);
  }, [page]);

  const nextPage = useCallback(() => {
    setPage((currentPage) => currentPage + 1);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return { items, nextPage, isLoading };
};
