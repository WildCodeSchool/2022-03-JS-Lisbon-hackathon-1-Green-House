import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext.js";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { auth } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/profile"
              element={<ProtectedRoute element={Profile} />}
            />
            {/* <Redirect to="/" /> */}
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
