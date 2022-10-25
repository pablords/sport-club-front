//@ts-nocheck

import AppRoutes from "./routes"

export default function Root({ isAuthenticated }) {
  return (
    <AppRoutes
      isAuthenticated={isAuthenticated}
    />
  )
}
