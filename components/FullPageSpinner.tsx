import { ActivityIndicator, StyleSheet, View } from "react-native";

export const FullPageSpinner = () => (
  <View style={styles.centered}>
    <ActivityIndicator />
  </View>
);

const styles = StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
