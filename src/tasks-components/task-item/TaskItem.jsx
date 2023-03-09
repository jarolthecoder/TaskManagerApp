import { useContext } from 'react'
import { AppContext } from '../../AppProvider'
import { Button } from '../../components/'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TaskItem.css'


// Icons
const deleteIcon = <FontAwesomeIcon icon={ faTrashCan } />
const editIcon = <FontAwesomeIcon icon={ faEllipsisVertical } />

export const TaskItem = ({ task }) => {

  const {
    handleCompleteToggle,
    handleImportantToggle,
    handleEditTask,
    onDelete
  } = useContext(AppContext);
  
  
  return (
    <div className="task-item is-flex" key={task.id}>
      <div className="task">
        <h3 className={`task-title ${task.isCompleted ? 'is-completed' : ''}`}>{ task.title }</h3>
        <p className={`task-description ${task.isCompleted ? 'is-completed' : ''}`}>{ task.description }</p>
      </div>
      <div className="task-options is-flex">
        <div className="options-left is-flex">
          <Button 
            customFunction={() => handleCompleteToggle(task.id)}
            customClass={`completed-btn task-btn ${task.isCompleted ? 'is-completed' : ''}`}
            text={`${task.isCompleted ? 'Completed' : 'To do'}`}
          />
          <Button 
            customFunction={() => handleImportantToggle(task.id)}
            customClass={`priority-btn task-btn ${task.isImportant ? 'is-priority' : ''}`}
            text={ `Important` } 
          />
        </div>
        <div className="options-right is-flex">
          <Button 
            customFunction={() => onDelete(task) }
            customClass="delete-btn task-btn" 
            text={ deleteIcon } 
          />
          <Button 
            customFunction={() => handleEditTask(task, task.id) }
            customClass="edit-btn task-btn" 
            text={ editIcon } 
          />
        </div>
      </div>
    </div>
  )
}
