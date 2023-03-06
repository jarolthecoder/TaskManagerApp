import { Button } from '../../components/Button';
import '../../styles/_components/AddTaskModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { AddTaskForm } from './AddTaskForm';
import { EditTaskForm } from './EditTaskForm';
import { DeletePrompt } from './DeletePrompt';
import { useContext } from 'react';
import { AppContext } from '../../AppProvider';

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
    <div className={`add-task-modal ${showModal ? 'modal-active' : ''}`}>
      <div className="add-task-inner">
        <div className="add-task-inner-header is-flex">
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
