import { Button } from '../../ui/components'
import { TaskItem } from '../task-item/TaskItem'
import './TaskRoutes.css'


export const Important = ({ tasks, handleModalVisible }) => {

  const important = tasks.filter(task => task.isImportant);

  return (
    <div className="task-grid animate__animated animate__fadeIn animate__faster">
      {
        important.length === 0
        ? <Button 
            customFunction={ handleModalVisible }
            customClass="add-btn-grid"
            text="Add a task"
          />
        : important.map(task => {
          return ( <TaskItem key={task.id} task={ task } /> )
        })
      }
    </div>
  )
}
