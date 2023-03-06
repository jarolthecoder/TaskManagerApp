import { SearchBar } from '../components/SearchBar'
import { TaskDisplayer } from '../tasks/TaskDisplayer'
import { useDate } from '../hooks/useDate'
import '../styles/_layout/Displayer.css'
import { UserPanel } from '../components/UserPanel'
import { Header } from './Header'

export const Displayer = () => {

  const { todayDate, dateTimeFormat } = useDate();

  return (
    <div className="main-displayer">
      <Header />
      <TaskDisplayer />
    </div>
  )
}
