/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

function App() {
  // Initialize tasks state
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Function to add a new task to the list
  const addTask = (taskText) => {
    setTasks(prevTasks => [...prevTasks, taskText]);
  };

  return (
    <SafeAreaView>
      {/* Pass tasks to ToDoList component using the tasks prop */}
      <ToDoList tasks={tasks} />
      {/* Pass addTask function as a prop to ToDoForm */}
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
