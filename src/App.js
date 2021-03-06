import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Error";
import ForgotPassword from "./ForgotPassword";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot">
            <ForgotPassword />
          </Route>
          <Route path="/reset/:id/:token">
            <ResetPassword />
          </Route>
          <Route path='**'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
