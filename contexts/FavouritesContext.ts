import { createContext, Dispatch, SetStateAction } from "react";
import { ListItem } from "@/api/types";

export type FavouritesContextType = {
  favourites: ListItem[];
  setFavourites: Dispatch<SetStateAction<ListItem[]>>;
  toggleFavourite: (id: ListItem) => void;
};

export const FavouritesContext = createContext<
  FavouritesContextType | undefined
>(undefined);
