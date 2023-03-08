import { useContext, useState } from 'react'
import { Button, ThemeButton } from '../../components'
import { AppContext } from '../../AppProvider'
import LogoRegular from '../../assets/taskmanager-logo-original.png'
import CoverImg from '../../assets/app-cover.png'
import './LoginPage.css'

export const LoginPage = () => {

  const { updateUser } = useContext(AppContext)
  const [userInput, setUserInput] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault()
    const userValue = userInput.trim().toLocaleLowerCase()
		if(userValue.length <= 1 || userValue.length > 13) return;

    updateUser(userValue, true);
    setUserInput('');
  }
  const onUserInput = (e) => {
    setUserInput(e.target.value)
  }
  

  return (
    <div className="login-page">
      <header className="login-page-header is-flex">
        <div className="brand is-flex">
          <img src={ LogoRegular } className="brand-logo" alt="TaskManager Logo"/>
          <h4 className="brand-name">TaskManager</h4>
        </div>
        <ThemeButton />
      </header>
      <div className="login-inner-wrapper">
        <div className="col-left is-flex animate__animated animate__fadeIn">
            <h1>Organize your daily tasks easily with <span>TaskManager.</span></h1>
            <p className="lead">No registration needed, just create an username and start using the app!</p>
            <form className="username-bar is-flex" onSubmit={onFormSubmit}>
              <input 
                className="username-input" 
                type="text" 
                name="username"
                value={ userInput }
                onChange={ onUserInput }
                placeholder="Username"
              />
              <Button customClass="login-btn" text="Login" />
            </form>
        </div>
        <div className="col-right animate__animated animate__fadeInBottomRight animate__fast">
          <img src={ CoverImg } alt="app-cover-img" />
        </div>
      </div>
    </div>
  )
}
