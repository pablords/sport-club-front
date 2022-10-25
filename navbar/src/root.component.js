import { ButtonAppBar } from "./Navbar"
import { setToken, isAuthenticated, getToken, logout } from "@mfe/auth";

export default function Root(props) {
  return (
    <ButtonAppBar 
      logout={logout}
      isAuthenticated={isAuthenticated}
    />
  )
}
