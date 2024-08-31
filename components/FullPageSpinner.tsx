import { ThemedView } from "@/components/ThemedView";
import { ActivityIndicator, StyleSheet } from "react-native";

export const FullPageSpinner = () => (
  <ThemedView style={styles.centered}>
    <ActivityIndicator />
  </ThemedView>
);

const styles = StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
