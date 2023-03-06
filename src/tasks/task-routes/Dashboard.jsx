import { Button } from "../../components/Button"
import { TaskItem } from "../TaskItem"


export const Dashboard = ({ tasks, handleModalVisible }) => {
  
  return (
    <div className="task-grid animate__animated animate__fadeIn animate__faster">
      {
        tasks.length === 0
        ? <Button 
            customFunction={ handleModalVisible }
            customClass="add-btn-grid"
            text="Add a task"
          />
        : tasks.map(task => {
          return ( <TaskItem key={task.id} task={ task } /> )
        })
      }
    </div>
  )
}
