import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Text } from "react-native";
import { Divider } from "@/components/Divider";
import { PokemonDetailCategoryInfo } from "@/components/PokemonDetailCategoryInfo";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pokemon } from "@/api/types";

export const PokemonDetails = ({ details }: { details: Pokemon }) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Text style={{ fontSize: 40 }}>{details?.id}</Text>
        <Divider direction={"vertical"} />
        <Text style={styles.titleText}>{details?.name.toUpperCase()}</Text>
      </ThemedView>
      {!!details?.types && (
        <PokemonDetailCategoryInfo
          title={"Types"}
          data={details?.types.map((typeSlot) => typeSlot.type.name)}
          icon={<SimpleLineIcons name="fire" size={24} color="black" />}
          color={"#8450c8"}
        />
      )}
      <Divider style={styles.divider} />
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
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    gap: 30,
    padding: 5,
  },
  titleContainer: { flexDirection: "row", gap: 10, backgroundColor: "inherit" },
  titleText: { color: "#3C5AA6", fontSize: 40 },
  divider: { width: "100%" },
});
