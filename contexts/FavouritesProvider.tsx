import { FavouritesContext } from "@/contexts/FavouritesContext";
import { FC, ReactNode, useCallback, useState } from "react";
import { isFavourite } from "@/contexts/FavouritesHelpers";
import { ListItem } from "@/api/types";

export const FavouritesProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<ListItem[]>([]);

  const toggleFavourite = useCallback(
    (item: ListItem) =>
      setFavourites((currentFavourites) =>
        isFavourite(favourites, item.id)
          ? currentFavourites.filter(
              ({ id: currentId }) => currentId !== item.id,
            )
          : [...currentFavourites, item],
      ),
    [favourites],
  );

  return (
    <FavouritesContext.Provider
      value={{ favourites, setFavourites, toggleFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
