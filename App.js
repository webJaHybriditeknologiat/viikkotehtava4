import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (task) => {
    const newTasks = [...tasks, { id: Date.now().toString(), text: task, done: false }];
    setTasks(newTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const toggleTaskDone = async (taskId) => {
    const updatedTasks = tasks.map(task => task.id === taskId ? { ...task, done: !task.done } : task);
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const loadTasks = async () => {
    const savedTasks = await AsyncStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo list</Text>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTaskDone} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 16,
  },
});
