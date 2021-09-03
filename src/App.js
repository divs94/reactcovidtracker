import React from "react";
import Covid from "./Covid";
import { Redirect, Route, Switch } from "react-router-dom";
import Statewise from "./Statewise";




const App = () => {

  return (
    <>


      <Switch>
        <Route exact path="/" component={Covid} />
        <Route exact path="/statewise" component={Statewise} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;