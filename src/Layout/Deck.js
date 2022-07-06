import React from "react";
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import Study from "./Study";



export default function Deck({decks, setDecks, cards, setCards}) {

const routeMatch = useRouteMatch()
console.log("routematch:" , routeMatch, "url:", routeMatch.url, "path:", routeMatch.path)

const breadcrumb = <nav aria-label="breadcrumb">
<ol class="breadcrumb">
  <li class="breadcrumb-item"><Link to="/">Home</Link></li>
  <li class="breadcrumb-item"><Link to="/">Library</Link></li>
  <li class="breadcrumb-item active" aria-current="page">Data</li>
</ol>
</nav>

return (
    <React.Fragment>
  {breadcrumb}
<Switch>
    <Route exact path={`${routeMatch.path}`}>

    </Route>
    
    <Route path={`${routeMatch.path}/study`}>
    
    <Study cards={cards} decks={decks}/>
    
    </Route>
    
    
     </Switch>
     </React.Fragment>

)


}