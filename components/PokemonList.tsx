import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { PokemonListItem } from "@/components/PokemonListItem";
import { usePokemonList } from "@/hooks/usePokemonList";

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
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text>Show favourites only</Text>
        <Switch value={isFilterEnabled} onValueChange={toggleFilter} />
      </View>
      <View style={styles.infoContainer}>
        {!isFilterEnabled ? (
          <Text>Long press to add/remove favourites</Text>
        ) : null}
      </View>
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
          !isLoading ? (
            <View
              style={{
                backgroundColor: "inherit",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>There are no favourites</Text>
            </View>
          ) : null
        }
      />
    </View>
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
