import { useContext } from 'react'
import { AppContext } from '../../../AppProvider'
import './TasksStats.css'

export const TasksStats = () => {
  const {tasksCount, tasksCompleted, tasksPending} = useContext(AppContext)
  
  return (
    <div className="stats-wrapper">
      <h3>Tasks stats</h3>
      <div className="stats is-flex">
        <h4 className="stats-title">Total</h4>
        <small className="stats-number">{ tasksCount }</small>
      </div>
      <div className="stats is-flex">
        <h4 className="stats-title">Completed</h4>
        <small className="stats-number">{ tasksCompleted }</small>
      </div>
      <div className="stats is-flex">
        <h4 className="stats-title">Pending</h4>
        <small className="stats-number">{ tasksPending }</small>
      </div>
    </div>
  )
}
