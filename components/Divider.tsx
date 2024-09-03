import { StyleSheet, View } from "react-native";
import { StyleProps } from "react-native-reanimated";
import { Colors } from "@/constants/Colors";

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
  dividerHorizontal: { height: 1, backgroundColor: Colors.backgroundDivider },
  dividerVertical: { width: 1, backgroundColor: Colors.backgroundDivider },
});
