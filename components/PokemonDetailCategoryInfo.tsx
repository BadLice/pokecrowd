import { StyleSheet, Text, View } from "react-native";
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
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          {icon}
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View>
          {data.map((item) => (
            <View style={styles.listContainer} key={item}>
              <Octicons name="triangle-right" size={24} color="black" />
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
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
