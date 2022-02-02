import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Admin_Dash from "./pages/Admin_Dash";
import Command_Dash from "./pages/Command_Dash";
import Login from "./pages/Login";
import Manager_Dash from "./pages/Manager_Dash";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/Admin_Dash" component={Admin_Dash} />
        <Route exact path="/Manager_Dash" component={Manager_Dash} />
        <Route exact path="/Commands_Dash" component={Command_Dash} />
      </div>
    </Router>
  );
}

export default App;