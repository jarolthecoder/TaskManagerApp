import { createContext, useState } from 'react'
import { useTask } from './hooks/useTask'
import { useTheme } from './hooks/useTheme'


export const AppContext = createContext('');

export const AppProvider = ({ children }) => {

  // Theme
  const { theme, handleSwitchTheme } = useTheme();

  // Task Management
  const {
    tasks, 
    handleNewTask, 
    handleUpdateTask,
    handleDeleteTask, 
    handleCompleteToggle,
    handleImportantToggle,
    tasksCount,
    tasksCompleted,
    tasksPending
  } = useTask();

  // Task Modal
  const [showModal, setShowModal] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleModalVisible = () => {
    !showModal ? setShowModal(true) : setShowModal(false)
    setSelectedTask(null);
    setDeleteTask(false)
  }

  const onDelete = (task) => {
    setSelectedTask(task)
    setShowModal(true)
    setDeleteTask(true)
  }

  const handleEditTask = (task, id) => {
    setSelectedTask(task);
    setShowModal(true)
  }

  const value = {
    theme,
    handleSwitchTheme,
    tasks,
    handleNewTask,
    handleUpdateTask,
    handleDeleteTask,
    handleCompleteToggle,
    handleImportantToggle,
    tasksCount,
    tasksCompleted,
    tasksPending,
    showModal,
    setShowModal,
    deleteTask,
    setDeleteTask,
    selectedTask,
    setSelectedTask,
    handleModalVisible,
    onDelete,
    handleEditTask
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}