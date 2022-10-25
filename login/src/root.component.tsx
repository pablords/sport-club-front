//@ts-nocheck

import AppRoutes from "./routes"

export interface IAuth {
  isAuthenticated: () => Boolean
  getToken: () => string
  setToken: (token: string) => void
  logout: () => void
}

export default function Root({ getToken, isAuthenticated, logout, setToken }: IAuth) {

  return (
    <AppRoutes
      setToken={setToken}
      isAuthenticated={isAuthenticated}
      getToken={getToken}
      logout={logout}
    />
  )
}
