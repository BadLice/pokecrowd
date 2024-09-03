import { ListItem } from "@/api/types";

export const isFavourite = (favourites: ListItem[], id: number) =>
  favourites.some(({ id: currentId }) => id === currentId);
