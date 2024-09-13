import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

const PADDING_HORIZONTAL = 15;
const PADDING_VERTICAL = 15;
const TAB_ITEM_WIDTH = 35;
const TAB_GAP = 30;

interface Props {
  activeIndex: number;
}
export default function TabIndicator({ activeIndex }: Props) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(activeIndex * (TAB_ITEM_WIDTH + TAB_GAP), { damping: 15, stiffness: 150 })
        }
      ]
    };
  });
  return <Animated.View style={[styles.container, animatedStyle]} />;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: PADDING_VERTICAL / 2,
    bottom: PADDING_VERTICAL / 2,
    left: PADDING_HORIZONTAL / 2,
    borderRadius: 50,
    aspectRatio: 1,
    backgroundColor: '#fff',
    zIndex: -1
  }
});
