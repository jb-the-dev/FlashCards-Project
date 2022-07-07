import React, {useState} from "react";
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import Study from "./Study";
import ViewDeck from "./ViewDeck";

export default function Deck({ decks, setDecks, cards, setCards }) {
  const { params, path, url } = useRouteMatch();
  const [deck, setDeck] = useState({ cards: [] });

  const breadcrumb = (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li class="breadcrumb-item">
          <Link to={`${url}`}> {deck.name} </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Data
        </li>
      </ol>
    </nav>
  );

  return (
    <React.Fragment>
      
      <Switch>
        <Route exact path={`${path}`}>

        <ViewDeck decks={decks} deck={deck} setDeck={setDeck} setDecks={setDecks}/>

        </Route>

        <Route path={`${path}/study`}>
        {breadcrumb}
          <Study cards={cards} decks={decks} deck={deck} setDeck={setDeck} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
