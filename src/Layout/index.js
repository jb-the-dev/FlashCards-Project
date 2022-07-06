import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import LoadDecks from "./LoadDecks";
import Deck from "./Deck";

function Layout() {

  
  const [decks, setDecks] = useState([])
  const [cards, setCards] = useState([])
  

  return (
    <React.Fragment>
      <Header />
      <div className="container">
      <button type="button" className="btn btn-secondary">Create Deck</button>
        <Switch> 
        <Route exact path="/">
            <LoadDecks decks={decks} cards={cards} setDecks={setDecks} setCards={setCards} />

        </Route>
        <Route path="/decks/:deckId">

          <Deck decks={decks} cards={cards} setDecks={setDecks} setCards={setCards}/>
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
