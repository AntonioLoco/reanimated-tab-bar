import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props extends TouchableOpacityProps {}
export function TabAddButton(props: Props) {
  return (
    <TouchableOpacity style={styles.item_container} {...props}>
      <Ionicons name={'add'} size={30} color={'white'} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item_container: {
    width: 35,
    aspectRatio: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
