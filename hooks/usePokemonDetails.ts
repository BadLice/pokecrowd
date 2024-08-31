import { useCallback, useEffect, useState } from "react";
import { getPokemonDetails } from "@/api/services";
import { Pokemon } from "@/api/types";

export const usePokemonDetails = (id: number | string) => {
  const [details, setDetails] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemonDetails = useCallback(async () => {
    setIsLoading(true);
    const response = await getPokemonDetails(Number(id));
    if (!response.data) return; //TODO
    setDetails(response.data);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchPokemonDetails();
  }, [fetchPokemonDetails]);

  return { details, isLoading };
};
