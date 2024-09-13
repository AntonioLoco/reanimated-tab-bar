import { StyleSheet, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
import Animated, { StretchInX } from 'react-native-reanimated';
import { TabItem } from './tab-item';
import { useMemo } from 'react';
import { splitArrayInHalf } from '../../utils/splitArrayInHalf';
import { TabAddButton } from '@components/TabBar/tab-add-button';
import TabIndicator from '@components/TabBar/tab-indicator';

interface TabBarProps extends BottomTabBarProps {
  onPressAddButton?: () => void;
}
export default function TabBar({ state, insets, navigation, descriptors, onPressAddButton }: TabBarProps) {
  const routes = useMemo(() => {
    if (onPressAddButton == null) return state.routes;
    const splitArray = splitArrayInHalf(state.routes);

    return [...splitArray[0], { type: 'add_button' }, ...splitArray[1]];
  }, [state.routes]);
  const midIndex = useMemo(() => Math.ceil(state.routes.length / 2), [state.routes]);
  const activeIndex = onPressAddButton != null ? (state.index >= midIndex ? state.index + 1 : state.index) : state.index;

  return (
    <View
      style={[
        styles.container,
        {
          bottom: insets.bottom
        }
      ]}
    >
      <Animated.View entering={StretchInX.duration(350)} style={styles.tab_bar_container}>
        {routes.map((route: any) => {
          if (route.type === 'add_button') {
            return <TabAddButton key={'add_button_tab'} onPress={onPressAddButton} />;
          }

          const descriptor = descriptors[route.key];
          const isFocused = state.routes[state.index].key === route.key;
          const index = state.routes.findIndex((r) => r.key === route.key);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
          return <TabItem descriptor={descriptor} activeIndex={state.index} index={index} key={route.key} onPress={onPress} />;
        })}

        <TabIndicator activeIndex={activeIndex} />
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  tab_bar_container: {
    position: 'relative',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
    borderCurve: 'continuous',
    backgroundColor: '#272822',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    justifyContent: 'space-evenly'
  }
});
