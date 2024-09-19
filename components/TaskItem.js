import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const TaskItem = ({ task, onToggleTask }) => {
  return (
    <Pressable onPress={() => onToggleTask(task.id)}>
      <Text style={task.done ? styles.doneTask : styles.task}>
        {task.text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  task: {
    fontSize: 18,
    padding: 10,
  },
  doneTask: {
    fontSize: 18,
    padding: 10,
    textDecorationLine: 'line-through',
  },
});

export default TaskItem;
