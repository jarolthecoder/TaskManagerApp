import { Button } from "../../components/button/Button";
import { TaskItem } from "../task-item/TaskItem";
import './TaskRoutes.css';


export const Todo = ({ tasks, handleModalVisible }) => {
  
  const todos = tasks.filter(task => !task.isCompleted);

  return (
    <div className="task-grid animate__animated animate__fadeIn animate__faster">
      {
        todos.length === 0
        ? <Button 
            customFunction={ handleModalVisible }
            customClass="add-btn-grid"
            text="Add a task"
          />
        : todos.map(task => {
          return ( <TaskItem key={task.id} task={ task } /> )
        })
      }
    </div>
  )
}
