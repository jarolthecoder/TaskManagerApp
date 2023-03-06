import '../styles/_components/SearchBar.css';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Icons
const searchIcon = <FontAwesomeIcon icon={ faSearch }></FontAwesomeIcon>

export const SearchBar = () => {
  return (
    <form className="search-bar is-flex">
      <input 
        className="search-input" 
        type="text" 
        placeholder="Search tasks"
      />
      <Button customClass="search-btn" text={ searchIcon } />
    </form>
  )
}
