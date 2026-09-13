import { StyleSheet, Text, View } from 'react-native';

export function Header({ cartCount }: { cartCount: number }) {
  return <View style={styles.header}><Text style={styles.logo}>📚 BookStore</Text><View style={styles.actions}><Text style={styles.icon}>🔍</Text><View><Text style={styles.icon}>🛒</Text>{cartCount > 0 && <Text style={styles.count}>{cartCount}</Text>}</View></View></View>;
}

const styles = StyleSheet.create({
  header: { alignItems: 'center', backgroundColor: '#1E1B4B', flexDirection: 'row', height: 56, justifyContent: 'space-between', paddingHorizontal: 16 },
  logo: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' }, actions: { alignItems: 'center', flexDirection: 'row', gap: 16 }, icon: { fontSize: 19 },
  count: { backgroundColor: '#DC2626', borderRadius: 9, color: '#FFFFFF', fontSize: 10, fontWeight: '700', minWidth: 18, overflow: 'hidden', position: 'absolute', right: -8, textAlign: 'center', top: -7 },
});
