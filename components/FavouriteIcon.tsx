import AntDesign from "@expo/vector-icons/AntDesign";
import Animated from "react-native-reanimated";
import { FC } from "react";
import { useFavouriteToggleAnimation } from "@/hooks/useFavouriteToggleAnimation";
import useUpdateEffect from "beautiful-react-hooks/useUpdateEffect";
import { Colors } from "@/constants/Colors";

export const FavouriteIcon: FC<{
  isFavourite: boolean;
}> = ({ isFavourite }) => {
  const { iconStyle, start } = useFavouriteToggleAnimation();

  //TODO: improve
  useUpdateEffect(() => {
    start();
  }, [isFavourite, start]);

  return (
    <Animated.View style={iconStyle}>
      {isFavourite ? (
        <AntDesign name="star" size={24} color={Colors.favourite} />
      ) : (
        <AntDesign name="staro" size={24} color={Colors.favourite} />
      )}
    </Animated.View>
  );
};
