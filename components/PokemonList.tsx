import { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { PokemonListItem } from "@/components/PokemonListItem";
import { ThemedView } from "@/components/ThemedView";
import { usePokemonList } from "@/hooks/usePokemonList";

export const PokemonList = () => {
  const { items, nextPage, isLoading } = usePokemonList();
  // used to prevent onEndReached trigger on first render
  const [hasMomentum, setHasMomentum] = useState(true);

  const handleEndReached = useCallback(() => {
    if (hasMomentum) return;
    console.log("=>(PokemonList.tsx:17) handleEndReached", handleEndReached);
    nextPage();
    setHasMomentum(true);
  }, [hasMomentum, nextPage]);

  return (
    <ThemedView style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={items}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <PokemonListItem {...item} />}
        onEndReached={handleEndReached}
        onMomentumScrollBegin={() => setHasMomentum(false)}
        ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  list: { height: "80%" },
  listContainer: { gap: 10 },
});
