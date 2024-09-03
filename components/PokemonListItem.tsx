import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Divider } from "@/components/Divider";
import { ListItem } from "@/api/types";
import { router } from "expo-router";
import { useFavourites } from "@/contexts/useFavourites";
import { useCallback, useMemo } from "react";
import { FavouriteIcon } from "@/components/FavouriteIcon";
import { isFavourite as isFavouriteHelper } from "@/contexts/FavouritesHelpers";
import { Colors } from "@/constants/Colors";

export const PokemonListItem = (item: ListItem) => {
  const { id, name } = item;
  const { favourites, toggleFavourite } = useFavourites();
  const isFavourite = useMemo(
    () => isFavouriteHelper(favourites, id),
    [favourites, id],
  );

  const handleToggleFavourite = useCallback(() => {
    toggleFavourite(item);
  }, [item, toggleFavourite]);

  const handleGoToDetail = useCallback(() => {
    router.push<{ id: number }>({
      pathname: "/details",
      params: { id },
    });
  }, [id]);

  return (
    <TouchableWithoutFeedback onLongPress={handleToggleFavourite}>
      <View style={styles.listItem}>
        <View style={styles.infoContainer}>
          <Text>{id}</Text>
          <Divider direction={"vertical"} />
          <FavouriteIcon isFavourite={isFavourite} />
          <Divider direction={"vertical"} />
          <Text>{name.toUpperCase()}</Text>
        </View>
        <TouchableOpacity onPress={handleGoToDetail} hitSlop={10}>
          <Entypo name="chevron-thin-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    backgroundColor: Colors.backgroundLight,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
  infoContainer: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: "inherit",
    gap: 10,
  },
  divider: { width: 1, backgroundColor: "black" },
});
