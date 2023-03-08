import { TaskDisplayer } from '../../tasks-components/task-displayer/TaskDisplayer'
import { Header } from '../header/Header'
import './Displayer.css'

export const Displayer = () => {


  return (
    <div className="main-displayer">
      <Header />
      <TaskDisplayer />
    </div>
  )
}
