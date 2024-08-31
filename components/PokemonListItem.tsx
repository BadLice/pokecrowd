import { StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Divider } from "@/components/Divider";
import { ListItem } from "@/api/types";

export const PokemonListItem = ({ name, id, url }: ListItem) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <ThemedView style={styles.infoContainer}>
        <ThemedText>{id}</ThemedText>
        <Divider />
        <ThemedText>{name.toUpperCase()}</ThemedText>
      </ThemedView>
      <Entypo name="chevron-thin-right" size={24} color="black" />
    </TouchableOpacity>
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
