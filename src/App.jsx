import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Services from "./Services";
import About from "./About";


import Ann from "./Pages/Ann";
import Career from "./Pages/Career";
import Happen from "./Pages/Happen";
import Hranalytics from "./Pages/Hranalytics";
import Learning from "./Pages/Learning";
import Meeting from "./Pages/Meeting";
import Myben from "./Pages/Myben";
import Myprofile from "./Pages/Myprofile";
import Projectmon from "./Pages/Projectmon";
import Seekask from "./Pages/Seekask";
import Timesheets from "./Pages/Timesheets";
import Worklist from "./Pages/Worklist";

import Profileone from "./Direct/Profileone";


const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/About" component={About} />


          <Route exact path="/Ann" component={Ann} />
          <Route exact path="/Career" component={Career} />
          <Route exact path="/Happen" component={Happen} />
          <Route exact path="/Hranalytics" component={Hranalytics} />
          <Route exact path="/Learning" component={Learning} />
          <Route exact path="/Meeting" component={Meeting} />
          <Route exact path="/Myben" component={Myben} />
          <Route exact path="/Myprofile" component={Myprofile} />
          <Route exact path="/Projectmon" component={Projectmon} />
          <Route exact path="/Seekask" component={Seekask} />
          <Route exact path="/Timesheets" component={Timesheets} />
          <Route exact path="/Worklist" component={Worklist} />
          <Route exact path="/Profileone" component={Profileone} />

          <Redirect to="/Home" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
