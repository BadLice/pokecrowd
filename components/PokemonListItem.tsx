import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Divider } from "@/components/Divider";
import { ListItem } from "@/api/types";
import { router } from "expo-router";
import { useFavourites } from "@/contexts/useFavourites";
import { useCallback, useMemo } from "react";
import { FavouriteIcon } from "@/components/FavouriteIcon";
import { isFavourite as isFavouriteHelper } from "@/contexts/FavouritesHelpers";

export const PokemonListItem = (item: ListItem) => {
  const { id, name } = item;
  const { favourites, toggleFavourite } = useFavourites();
  const isFavourite = useMemo(
    () => isFavouriteHelper(favourites, id),
    [favourites, id],
  );

  const handleToggleFavourite = useCallback(() => {
    toggleFavourite(item);
  }, [id, toggleFavourite]);

  const handleGoToDetail = useCallback(() => {
    router.push({
      pathname: "/details",
      params:
        //TODO: type
        { id },
    });
  }, [id]);

  return (
    <TouchableWithoutFeedback onLongPress={handleToggleFavourite}>
      <View style={styles.listItem}>
        <ThemedView style={styles.infoContainer}>
          <ThemedText>{id}</ThemedText>
          <Divider direction={"vertical"} />
          <FavouriteIcon isFavourite={isFavourite} />
          <Divider direction={"vertical"} />
          <ThemedText>{name.toUpperCase()}</ThemedText>
        </ThemedView>
        <TouchableOpacity onPress={handleGoToDetail}>
          <Entypo name="chevron-thin-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    backgroundColor: "#eee",
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
