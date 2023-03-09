import { useContext } from 'react'
import { AppContext } from '../../AppProvider'
import { Button } from '../../ui/components'
import { AddTaskForm } from './add-form/AddTaskForm'
import { EditTaskForm } from './edit-form/EditTaskForm'
import { DeletePrompt } from './delete-form/DeletePrompt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import './TaskModal.css'

// Icons
const closeIcon = <FontAwesomeIcon icon={ faClose }/>

export const TaskModal = () => {
  
  const { selectedTask, deleteTask, showModal, handleModalVisible } = useContext(AppContext)

  let promptDisplay;
  let promptTitle;

  if(selectedTask && !deleteTask) {
    promptTitle = 'Edit Task'
    promptDisplay = <EditTaskForm />
  } 
  else if(deleteTask) {
    promptTitle = 'Delete this task?'
    promptDisplay = <DeletePrompt />
  } 
  else {
    promptTitle = 'Create a Task'
    promptDisplay = <AddTaskForm />
  }


  return (
    <div className={`task-modal ${showModal ? 'modal-active' : ''}`}>
      <div className="task-inner">
        <div className="task-inner-header is-flex">
          <h2>{ promptTitle }</h2>
          <Button 
            customFunction={ handleModalVisible }
            customClass="close-modal-btn" 
            text={ closeIcon } 
          />
        </div>
        { promptDisplay }
      </div>
    </div>
  )
}
