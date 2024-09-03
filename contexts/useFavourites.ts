import { useContext } from "react";
import { FavouritesContext } from "@/contexts/FavouritesContext";

export const useFavourites = () => {
  const value = useContext(FavouritesContext);
  if (!value)
    throw new Error("useFavourites must be used inside FavouritesProvider");
  return value;
};
