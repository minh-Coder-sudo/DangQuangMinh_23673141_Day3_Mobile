// GIỜ 4 — Layout toàn màn hình: ScrollView & SafeAreaView
// Minh hoạ HomeScreen, BookDetailScreen và CartScreen bằng useState.
import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './screens/HomeScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { CartScreen } from './screens/CartScreen';
import { TabBar, TabKey } from './components/TabBar';
import { BOOKS, CART_ITEMS } from '../../data';

export default function App() {
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const selectedBook = BOOKS.find((b) => b.id === selectedBookId) ?? null;

  const handleOpenCart = () => {
    setSelectedBookId(null);
    setShowCart(true);
    setActiveTab('cart');
  };

  const handleTabChange = (tab: TabKey) => {
    if (tab === 'home') {
      setSelectedBookId(null);
      setShowCart(false);
      setActiveTab('home');
    }

    if (tab === 'cart') {
      handleOpenCart();
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        {showCart ? (
          <CartScreen items={CART_ITEMS} />
        ) : selectedBook ? (
          <BookDetailScreen
            book={selectedBook}
            onBack={() => setSelectedBookId(null)}
            onAddToCart={() => setCartCount((n) => n + 1)}
          />
        ) : (
          <HomeScreen
            cartCount={cartCount}
            onPressBook={(id) => {
              setSelectedBookId(id);
              setActiveTab('home');
            }}
            onPressCart={handleOpenCart}
          />
        )}
      </View>
      {!selectedBook && (
        <TabBar active={showCart ? 'cart' : activeTab} onChange={handleTabChange} />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFFFF' },
  body: { flex: 1 },
});
