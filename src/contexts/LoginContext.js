import React, { useSate, useContext } from 'react'

const LoginContext = React.createContext({})
function LoginContextProvider({ children }) {
  const [isLogged, setLogged] = useSate(false)

  return (
    <LoginContext.Provider
      value={{
        isLogged,
        setLogged
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
export const useLoginContext = () => {
  return useContext(LoginContext)
}
export { LoginContext, LoginContextProvider }
