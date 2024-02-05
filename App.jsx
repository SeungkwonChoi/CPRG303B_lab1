/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList'; // Import ToDoList component
import ToDoForm from './components/ToDoForm'; // Import ToDoForm component

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList /> {/* Use ToDoList component */}
      <ToDoForm /> {/* Use ToDoForm component */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
