import { useContext } from "react";
import { AppContext } from "../../AppProvider";
import { Button } from "../../components/Button"

export const DeletePrompt = () => {
  
  const { selectedTask, handleDeleteTask, handleModalVisible } = useContext(AppContext)

  return (
    <div className="delete-box">
      <Button 
        customFunction={() => {handleDeleteTask(selectedTask.id); handleModalVisible()}}
        customClass="delete-confirm-btn"
        text="Delete"
      />
      <Button 
        customFunction={ handleModalVisible }
        customClass="cancel-btn"
        text="Cancel" 
      />
    </div>
  )
}
