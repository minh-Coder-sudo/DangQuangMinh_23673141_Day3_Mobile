import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BookGrid } from '@/components/book-grid';
import { CategoryChips } from '@/components/category-chips';
import { FloatingCartButton } from '@/components/floating-cart-button';
import { Header } from '@/components/header';
import { BOOKS } from '@/data/books';

export default function HomeScreen() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <Header cartCount={cartCount} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Danh mục</Text>
        <CategoryChips selected={selectedCategory} onSelect={setSelectedCategory} />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sách nổi bật</Text>
          <Text style={styles.bookCount}>{BOOKS.length} cuốn sách</Text>
        </View>
        <BookGrid books={BOOKS} onPressBook={() => setCartCount((count) => count + 1)} />
      </ScrollView>
      <FloatingCartButton count={cartCount} onPress={() => setCartCount((count) => count + 1)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8FAFC' },
  content: { padding: 16, paddingBottom: 110 },
  sectionTitle: { color: '#111827', fontSize: 18, fontWeight: '700', marginBottom: 10 },
  sectionHeader: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 },
  bookCount: { color: '#64748B', fontSize: 13, marginBottom: 10 },
});
