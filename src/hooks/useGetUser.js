import { useEffect, useState } from "react";


export const useGetUser = () => {

  // Initial user state
  const [user, setUser] = useState({
    name: '',
    loginToken: false
  });

  // Get user data from local storage on render
  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));

    if(userLocalStorage) {
      setUser(userLocalStorage);
    }
  }, [])

  // Update user state values on login
  const updateUser = (name, loginToken) => {
    setUser({
      name,
      loginToken
    })

    localStorage.setItem('user', JSON.stringify({
      name,
      loginToken
    }))
  }
  

  return {
    user,
    updateUser
  }
}
