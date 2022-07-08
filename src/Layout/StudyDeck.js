import React, { useState } from "react";
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import LoadCards from "./LoadCards";
import ViewDeck from "./ViewDeck";
import CreateCard from "./CreateCard";
import EditCard from "./EditCard";
import EditDeck from "./EditDeck";

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
          <ViewDeck
            decks={decks}
            deck={deck}
            setDeck={setDeck}
            setDecks={setDecks}
          />
        </Route>

        <Route path={`${path}/study`}>
          {breadcrumb}
          <h4> Study: {`${decks[params.deckId].name}`} </h4>
          <LoadCards
            cards={cards}
            decks={decks}
            params={params}
            deck={deck}
            setDeck={setDeck}
          />
        </Route>
        <Route exact path={`${path}/edit`}>
          <EditDeck />
        </Route>
        <Route path={`${path}/cards/new`}>
          <CreateCard />
        </Route>
        <Route path={`${path}/cards/:cardId/edit`}>
          <EditCard />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
