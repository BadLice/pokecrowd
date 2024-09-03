import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useCallback } from "react";

const ANGLE = 10;
const TIME = 100;
const EASING = Easing.elastic(1.5);

export const useFavouriteToggleAnimation = () => {
  const rotation = useSharedValue<number>(0);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  const start = useCallback(() => {
    rotation.value = withSequence(
      // deviate left to start from -ANGLE
      withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
      // wobble between -ANGLE and ANGLE 7 times
      withRepeat(
        withTiming(ANGLE, {
          duration: TIME,
          easing: EASING,
        }),
        3,
        true,
      ),
      // go back to 0 at the end
      withTiming(0, { duration: TIME / 2, easing: EASING }),
    );
  }, [rotation]);

  return { iconStyle, start };
};
