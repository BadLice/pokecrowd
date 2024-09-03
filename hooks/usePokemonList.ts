import { useCallback, useEffect, useMemo, useState } from "react";
import { getPagedPokemonList } from "@/api/services";
import { ListItem } from "@/api/types";
import { useFavourites } from "@/contexts/useFavourites"; //TODO: 20

const ITEMS_PER_PAGE = 20;

export const usePokemonList = () => {
  const { favourites } = useFavourites();
  const [items, setItems] = useState<ListItem[]>();
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterEnabled, setIsFilterEnabled] = useState(false);
  const filteredItems = useMemo(
    () => (isFilterEnabled ? favourites : items),
    [favourites, isFilterEnabled, items],
  );

  const toggleFilter = useCallback(
    () => setIsFilterEnabled((previousState) => !previousState),
    [],
  );

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

  return {
    items: filteredItems,
    nextPage,
    isLoading,
    toggleFilter,
    isFilterEnabled,
  };
};
