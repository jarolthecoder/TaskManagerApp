

export const taskReducer = (initialState = [], action) => {

  // Reducer checks the type of the action sent by dispatcher and returns the payload as new state if true
  switch(action.type) {
    case '[TASK] Add Task':
      return [action.payload, ...initialState];

    case '[TASK] Update Task':
      const { id, updatedTask} = action.payload;
      return initialState.map(task => {
        if (task.id === id) {
          return {
            ...task,
            ...updatedTask
          };
        }
        return task;
      });
    
    case '[TASK] Delete Task':
      return initialState.filter(task => task.id !== action.payload);
      

    case '[TASK] Complete Task':
      return initialState.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
            isImportant: task.isCompleted && false
          }
        }
        return task
      });

    case '[TASK] Important Task':
      return initialState.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            isImportant: task.isCompleted ? false : !task.isImportant
          }
        }
        return task
      });

    default:
      return initialState 
  }
}