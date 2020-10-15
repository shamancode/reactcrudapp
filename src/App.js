import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";
import { Home } from "./components/Home";
import React from "react";

function App() {
  // Add testing comment
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
