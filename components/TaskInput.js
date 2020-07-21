import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState('')

  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText)
  }

  const addTaskHandler = () => {
    props.onAddTask(enteredTask)
    setEnteredTask('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task..."
          style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addTaskHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancelTask} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    padding: 7,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
  },
})

export default TaskInput
