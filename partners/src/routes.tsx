import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { PartnesList } from "./List";

export interface IAppRoutesProps {
  isAuthenticated: () => boolean
}

export default function App(props: IAppRoutesProps) {
  return (
    <Router>
      <Routes>
        <Route
          path="/partners"
          element={
            <RequireAuth redirectTo="/login" isAuthenticated={props.isAuthenticated}>
              <PartnesList />
            </RequireAuth>
          }
        >
        </Route>
      </Routes>
    </Router>
  );
}

function RequireAuth({ children, redirectTo, isAuthenticated }) {
  return isAuthenticated() ? children : <Navigate to={redirectTo} />;
}
