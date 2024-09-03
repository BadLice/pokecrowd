import AntDesign from "@expo/vector-icons/AntDesign";
import Animated from "react-native-reanimated";
import { FC } from "react";
import { useFavouriteToggleAnimation } from "@/hooks/useFavouriteToggleAnimation";
import useUpdateEffect from "beautiful-react-hooks/useUpdateEffect"; //TODO: theme

//TODO: theme
const YELLOW = "#F6CF57";

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
        <AntDesign name="star" size={24} color={YELLOW} />
      ) : (
        <AntDesign name="staro" size={24} color={YELLOW} />
      )}
    </Animated.View>
  );
};
