/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import 'react-native-gesture-handler';
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

const Stack = createStackNavigator();

function App() {
  // Initialize tasks state
  const [tasks, setTasks] = useState([
  ]);

  // Function to add a new task to the list
  const addTask = (taskText) => {
    setTasks(prevTasks => [...prevTasks, taskText]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ToDoList">
          {(props) => <ToDoList {...props} tasks={tasks} />}
        </Stack.Screen>
        <Stack.Screen name="ToDoForm">
          {(props) => <ToDoForm {...props} addTask={addTask} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
