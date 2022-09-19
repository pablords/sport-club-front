import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, ILoginProps } from "./Login";

type IAppRoutesProps = ILoginProps

export default function App(props: IAppRoutesProps) {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              setToken={props.setToken}
              isAuthenticated={props.isAuthenticated}
              getToken={props.getToken}
              logout={props.logout}
            />
          }
        >
        </Route>
      </Routes>
    </Router>
  );
}
