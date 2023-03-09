import { useContext } from 'react'
import { UserPanel, SearchBar } from '../../components'
import { useDate } from '../../../hooks/useDate'
import { AuthContext } from '../../../auth/provider'
import './Header.css'

export const Header = () => {

  const { user } = useContext(AuthContext);
  const { todayDate, dateTimeFormat } = useDate();

  return (
    <header className="displayer-header">
      <div className="displayer-header-inner  is-flex">
        <div className="greetings">
            <time className="date" dateTime={ dateTimeFormat }>{ todayDate }</time>
          <h2>Welcome { user?.name }</h2>
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
