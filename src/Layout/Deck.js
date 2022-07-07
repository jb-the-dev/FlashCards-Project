import React from "react";
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import Study from "./Study";

export default function Deck({ decks, setDecks, cards, setCards }) {
  const { params, path, url } = useRouteMatch();

  const breadcrumb = (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li class="breadcrumb-item">
          <Link to={`${url}`}> {decks[params.deckId - 1].name} </Link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Data
        </li>
      </ol>
    </nav>
  );

  return (
    <React.Fragment>
      {breadcrumb}
      <Switch>
        <Route exact path={`${path}`}></Route>

        <Route path={`${path}/study`}>
          <Study cards={cards} decks={decks} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
