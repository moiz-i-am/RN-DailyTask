import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'

import TaskItem from './components/TaskItem'
import TaskInput from './components/TaskInput'

export default function App() {
  const [courseTasks, setCourseTasks] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addTaskHandler = (taskTitle) => {
    setCourseTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle },
    ])
    setIsAddMode(false)
  }

  const cancelTaskHandler = () => {
    setIsAddMode(false)
  }

  const removeTaskHandler = (taskId) => {
    setCourseTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== taskId)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Task" onPress={() => setIsAddMode(true)} />
      <TaskInput
        visible={isAddMode}
        onAddTask={addTaskHandler}
        onCancelTask={cancelTaskHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseTasks}
        renderItem={(itemData) => (
          <TaskItem
            id={itemData.item.id}
            onDelete={removeTaskHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
})
