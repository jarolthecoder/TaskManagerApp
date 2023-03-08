import { useEffect, useState } from "react";


export const useGetUser = () => {

  // Initial user state
  const [user, setUser] = useState({
    name: '',
    isLoggedIn: false
  });

  // Get user data from local storage on render
  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));

    if(userLocalStorage) {
      setUser(userLocalStorage);
    }
  }, [])

  // Update user state values on login
  const updateUser = (name,isLoggedIn) => {
    setUser({
      name,
      isLoggedIn
    })

    localStorage.setItem('user', JSON.stringify({
      name,
      isLoggedIn
    }))
  }
  

  return {
    user,
    updateUser
  }
}
