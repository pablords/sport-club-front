//@ts-nocheck
import { setToken, isAuthenticated, getToken, logout } from "@mfe/auth";
import AppRoutes from "./routes"


export default function Root(props) {
  return (
    <AppRoutes
      setToken={setToken}
      isAuthenticated={isAuthenticated}
      getToken={getToken}
      logout={logout}
    />
  )
}
