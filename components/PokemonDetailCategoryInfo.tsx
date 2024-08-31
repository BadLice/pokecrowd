import { StyleSheet, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Octicons from "@expo/vector-icons/Octicons";
import { ReactNode } from "react";

export const PokemonDetailCategoryInfo = ({
  data,
  title,
  icon,
  color,
}: {
  data: string[];
  title: string;
  icon: ReactNode;
  color: string;
}) => {
  const styles = getStyles(color);
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          {icon}
          <Text style={styles.titleText}>{title}</Text>
        </ThemedView>
        <ThemedView>
          {data.map((item) => (
            <ThemedView style={styles.listContainer} key={item}>
              <Octicons name="triangle-right" size={24} color="black" />
              <Text style={styles.listItemText}>{item}</Text>
            </ThemedView>
          ))}
        </ThemedView>
      </ThemedView>
    </>
  );
};

const getStyles = (color: string) =>
  StyleSheet.create({
    container: { gap: 10, alignItems: "center", backgroundColor: "inherit" },
    titleContainer: { flexDirection: "row", gap: 10, marginBottom: 10 },
    titleText: { fontSize: 20 },
    listContainer: { flexDirection: "row", gap: 10 },
    listItemText: {
      color,
      fontSize: 20,
    },
  });
