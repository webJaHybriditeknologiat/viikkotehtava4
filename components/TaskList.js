import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem task={item} onToggleTask={onToggleTask} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
