import { Image, SafeAreaView, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { PokemonList } from "@/components/PokemonList";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ThemedView
        style={{ height: "20%" }}
        lightColor={"#A1CEDC"}
        darkColor={"#1D3D47"}
      >
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",
          }}
          style={styles.reactLogo}
        />
      </ThemedView>
      <PokemonList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    position: "absolute",
  },
});
