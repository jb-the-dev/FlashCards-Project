import React, {useState} from "react";
import { useHistory, Link, useParams, Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import LoadDecks from "./LoadDecks";

function Layout() {

const params = useParams()
const history = useHistory()



  return (
    <React.Fragment>
      <Header />
      <div className="container">
      <button type="button" class="btn btn-secondary">Create Deck</button>
        <Switch> 
        <Route exact path="/">
            <LoadDecks />

        </Route>

        <Route> 
        <NotFound />
        </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;
