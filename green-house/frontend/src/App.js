import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext.js";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Leaderboard from "./components/leaderboard.jsx";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { auth } = React.useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         auth ? <Component {...props} /> : <Navigate to="/login" />
//       }
//     />
//   );
// };

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
