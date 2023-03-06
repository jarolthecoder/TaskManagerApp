import { SearchBar } from '../components/SearchBar'
import { TaskDisplayer } from '../tasks/TaskDisplayer'
import { useDate } from '../hooks/useDate'
import '../styles/_layout/Displayer.css'
import { UserPanel } from '../components/UserPanel'
export const Header = () => {

  const { todayDate, dateTimeFormat } = useDate();

  return (
    <header className="displayer-header">
        <div className="displayer-header-inner  is-flex">
          <div className="greetings">
            <small className="daily-msg">
              <time className="date" dateTime={ dateTimeFormat }>{ todayDate }</time>
            </small>
            <h2>Welcome User</h2>
          </div>
            <SearchBar />
            <div className="user-mobile">
              <UserPanel />
            </div>
        </div>
        <div className="search-bar-mobile">
          <SearchBar />
        </div>
      </header>
  )
}
