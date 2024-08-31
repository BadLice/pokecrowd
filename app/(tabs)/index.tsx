import { Image, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { PokemonList } from "@/components/PokemonList";

export default function HomeScreen() {
  return (
    <>
      <ThemedView
        style={{ height: "20%" }}
        lightColor={"#A1CEDC"}
        darkColor={"#1D3D47"}
      >
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      </ThemedView>
      <PokemonList />
    </>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 170,
    width: 290,
    top: 0,
    left: 0,
    position: "absolute",
  },
});
