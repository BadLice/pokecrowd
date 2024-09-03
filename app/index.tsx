import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { PokemonList } from "@/components/PokemonList";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={{
          height: "20%",
          backgroundColor: "inherit",
        }}
      >
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",
          }}
          style={styles.reactLogo}
        />
      </View>
      <PokemonList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { gap: 10, backgroundColor: Colors.backgroundCyan },
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
