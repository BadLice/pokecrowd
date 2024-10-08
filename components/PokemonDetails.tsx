import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "@/components/Divider";
import { PokemonDetailCategoryInfo } from "@/components/PokemonDetailCategoryInfo";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pokemon } from "@/api/types";
import { FavouriteIcon } from "@/components/FavouriteIcon";
import { useCallback, useMemo } from "react";
import { isFavourite as isFavouriteHelper } from "@/contexts/FavouritesHelpers";
import { useFavourites } from "@/contexts/useFavourites";
import { Colors } from "@/constants/Colors";

export const PokemonDetails = ({ details }: { details: Pokemon }) => {
  const { toggleFavourite, favourites } = useFavourites();

  const isFavourite = useMemo(
    () => isFavouriteHelper(favourites, details.id),
    [details.id, favourites],
  );

  const handleToggleFavourite = useCallback(() => {
    toggleFavourite({ name: details.name, id: details.id });
  }, [details, toggleFavourite]);

  return (
    <View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 40 }}>{details?.id}</Text>
          <Divider direction={"vertical"} style={styles.dividerVertical} />
          <TouchableOpacity onPress={handleToggleFavourite}>
            <FavouriteIcon isFavourite={isFavourite} />
          </TouchableOpacity>
          <Divider direction={"vertical"} style={styles.dividerVertical} />
          <Text style={styles.titleText}>{details?.name.toUpperCase()}</Text>
        </View>
        {!!details?.types && (
          <PokemonDetailCategoryInfo
            title={"Types"}
            data={details?.types.map((typeSlot) => typeSlot.type.name)}
            icon={<SimpleLineIcons name="fire" size={24} color="black" />}
            color={"#8450c8"}
          />
        )}
        <Divider style={styles.dividerHorizontal} />
        {!!details?.abilities && (
          <PokemonDetailCategoryInfo
            title={"Abilities"}
            icon={<FontAwesome5 name="fist-raised" size={24} color="black" />}
            data={details?.abilities.map(
              (abilitySlot) => abilitySlot.ability.name,
            )}
            color={"#4a8335"}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    gap: 30,
    backgroundColor: Colors.backgroundDefault,
    padding: 32,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "inherit",
    alignItems: "center",
  },
  titleText: { color: Colors.title, fontSize: 40 },
  dividerHorizontal: { width: "100%" },
  dividerVertical: { height: "100%" },
});
