import { useContext, useState } from 'react'
import { Button, ThemeButton } from '../../../ui/components'
import LogoRegular from '../../../assets/taskmanager-logo-original.png'
import CoverImg from '../../../assets/app-cover.png'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../auth/provider/AuthProvider'

export const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const [userInput, setUserInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault()
    const userValue = userInput.trim();

		if(userValue.length <= 1) {
      setErrorMsg('Username is too short!');
      return;
    } else if (userValue.length > 13) {
      setErrorMsg('Username cannot be longer than 13 characters!');
      return
    }

    login( userValue );
    setUserInput('');
    navigate('/', {
      replace: true
    });
  }

  const onUserInput = (e) => {
    setUserInput(e.target.value.trim());
    setErrorMsg('');
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
            <h1>Get More Done and Stress Less with <span>TaskManager.</span></h1>
            <p className="lead">No registration needed, just create a username and start using the app!</p>
            <form className="username-bar is-flex" onSubmit={ onFormSubmit }>
              <input 
                className="username-input form-input"
                type="text" 
                name="username"
                value={ userInput }
                onChange={ onUserInput }
                placeholder="Username"
              />
              <Button customClass="login-btn" text="Login" />
            </form>
            <p className="error-msg">{ errorMsg }</p>
        </div>
        <div className="col-right animate__animated animate__fadeInBottomRight animate__fast">
          <img src={ CoverImg } alt="app-cover-img" />
        </div>
      </div>
    </div>
  )
}
