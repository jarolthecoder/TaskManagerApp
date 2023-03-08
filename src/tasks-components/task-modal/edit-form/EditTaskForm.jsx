import { useContext } from 'react'
import { AppContext } from '../../../AppProvider'
import { useForm } from '../../../hooks/useForm'
import { Button } from '../../../components'


export const EditTaskForm = () => {
  
   const { selectedTask, handleUpdateTask, handleModalVisible } = useContext(AppContext)

  const {title, description, isCompleted, isImportant, onInputChange, onReset} = useForm({
    title: selectedTask.title,
    description: selectedTask.description,
    isCompleted: selectedTask.isCompleted,
    isImportant: selectedTask.isImportant
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (title.length <= 1) return

    const newTask = {
      id: selectedTask ? selectedTask.id : new Date().getTime(),
      title,
      description,
      isCompleted,
      isImportant
    };

    handleUpdateTask(selectedTask.id, newTask)
    onReset()
    handleModalVisible();
  }

  return (
    <form onSubmit={ onFormSubmit } className="task-form is-flex">
      <div className="form-block">
        <label htmlFor="title-input">Title</label>
        <input 
          type="text" 
          className="title-input" 
          name="title"
          value={ title }
          onChange={ onInputChange }
          id="title-input" 
          placeholder="Enter a title"/>
      </div>
      <div className="form-block">
        <label htmlFor="description">Description</label>
        <textarea 
          className="description" 
          id="description" 
          name="description"
          value={ description }
          onChange={ onInputChange }
          cols="30" 
          rows="10"
          placeholder="Enter a description"
        ></textarea>
      </div>
      <div className="form-block checkbox-wrapper is-flex">
        <label htmlFor="completed-btn" className="container">
          <span>Mark as completed</span>
          <input 
            type="checkbox" 
            name="isCompleted" 
            id="completed-btn" 
            className="checkbox"
            checked={ isCompleted }
            onChange={ onInputChange }
            value={ isCompleted }
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="form-block checkbox-wrapper is-flex">
        <label htmlFor="important-btn" className="container">
          <span>Mark as important</span>
          <input 
            type="checkbox" 
            name="isImportant" 
            id="important-btn" 
            className="checkbox"
            checked={ isImportant }
            onChange={ onInputChange }
            value={ isImportant }
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <Button 
        customClass="add-task-btn btn-modal" 
        text="Edit task"/>
    </form>
  )
}

