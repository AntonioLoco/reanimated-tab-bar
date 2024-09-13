import { StyleSheet, Text, View } from 'react-native';
interface Props {
  title: string;
}
export default function PageLayout({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold'
  }
});
