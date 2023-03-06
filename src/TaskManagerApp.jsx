import { Displayer, SideNavLeft, SideNavRight } from "./layout"
import { TaskModal } from "./tasks/task-modal/TaskModal";
import { useContext } from "react";
import { AppContext } from "./AppProvider";


const TaskManagerApp = () => {
  const { theme } = useContext(AppContext);
  
  return (
    <main className="main-container" data-theme={ theme }>
      <div className="inner-container">
        <SideNavLeft />
        <Displayer />
        <SideNavRight />
      </div>
      <TaskModal />
    </main>
  )
}

export default TaskManagerApp
