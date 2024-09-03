import { Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useLocalSearchParams } from "expo-router";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { FullPageSpinner } from "@/components/FullPageSpinner";
import { PokemonDetails } from "@/components/PokemonDetails";

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { details, isLoading } = usePokemonDetails(id);

  if (isLoading) return <FullPageSpinner />;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={{ uri: details?.sprites.front_default }}
          style={styles.image}
        />
      }
      headerStyle={styles.headerStyle}
    >
      {!!details && <PokemonDetails details={details} />}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerStyle: { height: 300 },
  image: { height: "100%", width: "100%" },
});
