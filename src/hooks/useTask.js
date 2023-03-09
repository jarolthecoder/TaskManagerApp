import { useReducer, useEffect } from 'react'
import { taskReducer } from '../utils/taskReducer';


// Reducer params
const initialState = []
const init = () => {
  const data = localStorage.getItem('Task List');
  return data ? JSON.parse(data) : [];
}

export const useTask = () => {

  const [tasks, dispatch] = useReducer(taskReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('Task List', JSON.stringify(tasks))
  }, [tasks])
  
  // Add New Task
  const handleNewTask = (task) => {
    const action = {
      type: '[TASK] Add Task',
      payload: task
    }
    dispatch(action)
  }

  // Update Task
  const handleUpdateTask = (id, updatedTask) => {
    const action = {
      type: '[TASK] Update Task',
      payload: {
        id,
        updatedTask
      }
    }
    dispatch(action)
  }
  
  // Delete Task
  const handleDeleteTask = (id) => {
    const action = {
      type: '[TASK] Delete Task',
      payload: id
    }
    dispatch(action)
  }

  // Mark Task as complete
  const handleCompleteToggle = (id) => {
    const action = {
      type: '[TASK] Complete Task',
      payload: id
    }
    dispatch(action)
  }

  // Mark Task as important
  const handleImportantToggle = (id) => {
    const action = {
      type: '[TASK] Important Task',
      payload: id
    }
    dispatch(action)
  }


  return {
    tasks,
    handleNewTask,
    handleUpdateTask,
    handleDeleteTask,
    handleCompleteToggle,
    handleImportantToggle,
    tasksCount: tasks.length,
    tasksCompleted: tasks.filter(task => task.isCompleted).length,
    tasksPending: tasks.filter(task => !task.isCompleted).length,
  }
}
