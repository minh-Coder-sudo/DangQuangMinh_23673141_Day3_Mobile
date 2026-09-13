import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '@/data/books';

export function CategoryChips({ selected, onSelect }: { selected: string; onSelect: (category: string) => void }) {
  return <View style={styles.wrap}>{CATEGORIES.map((category) => <Pressable key={category} onPress={() => onSelect(category)} style={[styles.chip, selected === category && styles.selected]}><Text style={[styles.text, selected === category && styles.selectedText]}>{category}</Text></Pressable>)}</View>;
}
const styles = StyleSheet.create({ wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, chip: { borderColor: '#6366F1', borderRadius: 999, borderWidth: 1, paddingHorizontal: 14, paddingVertical: 8 }, selected: { backgroundColor: '#4338CA', borderColor: '#4338CA' }, text: { color: '#4338CA', fontSize: 13, fontWeight: '600' }, selectedText: { color: '#FFFFFF' } });
