import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Book } from '@/data/books';
import { DiscountBadge } from './discount-badge';

export function BookGrid({ books, onPressBook }: { books: Book[]; onPressBook: (id: number) => void }) {
  return <View style={styles.grid}>{books.map((book) => <Pressable key={book.id} onPress={() => onPressBook(book.id)} style={styles.item}><View style={styles.coverWrap}><Image source={{ uri: book.cover }} style={styles.cover} /><DiscountBadge discountPercent={book.discountPercent} isNew={book.isNew} /></View><Text style={styles.title} numberOfLines={2}>{book.title}</Text><Text style={styles.author} numberOfLines={1}>{book.author}</Text><Text style={styles.price}>{book.price.toLocaleString('vi-VN')} đ</Text></Pressable>)}</View>;
}
const styles = StyleSheet.create({ grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }, item: { marginBottom: 18, width: '48%' }, coverWrap: { aspectRatio: 3 / 4, backgroundColor: '#E2E8F0', borderRadius: 10, overflow: 'hidden', position: 'relative', width: '100%' }, cover: { height: '100%', width: '100%' }, title: { color: '#111827', fontSize: 14, fontWeight: '700', marginTop: 7 }, author: { color: '#64748B', fontSize: 12, marginTop: 2 }, price: { color: '#4338CA', fontSize: 14, fontWeight: '700', marginTop: 4 } });
