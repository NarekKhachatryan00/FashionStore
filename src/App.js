import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./Homepage";
import Shop from "./Shop";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><HomePage/></Route>
      </Switch>
      <Switch>
        <Route path='/shop'><Shop/></Route>
      </Switch>
    </Router>
  );
}

export default App;
