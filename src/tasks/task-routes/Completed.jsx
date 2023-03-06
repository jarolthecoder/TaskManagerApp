import { TaskItem } from "../TaskItem"

export const Completed = ({ tasks }) => {
  
  const completed = tasks.filter(task => task.isCompleted);

  return (
    <div className="task-grid animate__animated animate__fadeIn animate__faster">
      {
        completed.length === 0
        ? <h3 className="empty-msg">Your list is empty</h3>
        : completed.map(task => {
          return ( <TaskItem key={task.id} task={ task } /> )
        })
      }
    </div>
  )
}
