import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./middleware";
import AdminDash from "./pages/AdminDash";
import CommandDash from "./pages/CommandDash";
import Login from "./pages/Login";
import ManagerDash from "./pages/ManagerDash";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/adminLogin" element={<Login />} />

          <Route
            path="/Admin_Dash"
            element={
              <PrivateRoute role='admin'>
                <AdminDash />
              </PrivateRoute>
            }
          />
          <Route path="/Manager_Dash" element={<ManagerDash />} />
          <Route path="/Commands_Dash" element={<CommandDash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
