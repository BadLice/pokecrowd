import { StyleSheet, View } from "react-native";
import { StyleProps } from "react-native-reanimated";

export const Divider = ({
  direction = "horizontal",
  style,
}: {
  direction?: "horizontal" | "vertical";
  style?: StyleProps;
}) => (
  <View
    style={[
      direction === "horizontal"
        ? styles.dividerHorizontal
        : styles.dividerVertical,
      style,
    ]}
  ></View>
);

const styles = StyleSheet.create({
  dividerHorizontal: { height: 1, backgroundColor: "grey" },
  dividerVertical: { width: 1, backgroundColor: "grey" },
});
