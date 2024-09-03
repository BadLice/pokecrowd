import { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Switch } from "react-native";
import { PokemonListItem } from "@/components/PokemonListItem";
import { ThemedView } from "@/components/ThemedView";
import { usePokemonList } from "@/hooks/usePokemonList";
import { ThemedText } from "@/components/ThemedText";

export const PokemonList = () => {
  const { items, nextPage, isLoading, toggleFilter, isFilterEnabled } =
    usePokemonList();
  // used to prevent onEndReached trigger on first render
  const [hasMomentum, setHasMomentum] = useState(true);

  const handleEndReached = useCallback(() => {
    if (hasMomentum) return;
    nextPage();
    setHasMomentum(true);
  }, [hasMomentum, nextPage]);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.switchContainer}>
        <ThemedText>Show favourites only</ThemedText>
        <Switch value={isFilterEnabled} onValueChange={toggleFilter} />
      </ThemedView>
      <ThemedView style={styles.infoContainer}>
        <ThemedText>Long press to add/remove favourites</ThemedText>
      </ThemedView>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={items}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <PokemonListItem {...item} />}
        onEndReached={handleEndReached}
        onMomentumScrollBegin={() => setHasMomentum(false)}
        ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
        ListEmptyComponent={
          <ThemedView
            style={{
              backgroundColor: "inherit",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThemedText>There are no favourites</ThemedText>
          </ThemedView>
        }
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "inherit",
    height: "80%",
  },
  list: { height: "80%" },
  listContainer: { gap: 10, padding: 10 },
  switchContainer: {
    padding: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "inherit",
  },
  infoContainer: {
    backgroundColor: "inherit",
    justifyContent: "center",
    alignItems: "center",
  },
});
