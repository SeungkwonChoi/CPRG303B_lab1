import React from 'react';
import { View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Your header content */}
      {/* This can include titles, navigation buttons, etc. */}
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      {/* Your footer content */}
      {/* This can include links, copyright info, etc. */}
    </View>
  );
};

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    height: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
});

export default MainLayout;
