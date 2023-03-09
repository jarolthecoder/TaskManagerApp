import { Button } from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css'

// Icons
const searchIcon = <FontAwesomeIcon icon={ faSearch }></FontAwesomeIcon>

export const SearchBar = () => {

  return (
    <form className="search-bar is-flex" tabIndex="1">
      <input 
        className="search-input" 
        type="text" 
        placeholder="Search tasks"
      />
      <Button customClass="search-btn" text={ searchIcon } />
    </form>
  )
}
