import React, { useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import LoadCards from "./LoadCards";

export default function Study({ cards, decks }) {
  const params = useParams();

  console.log(params);
  console.log(cards);

  return (
    <React.Fragment>
      <h4> Study: {`${decks[params.deckId - 1].name}`} </h4>
      <Switch>
        <Route>
          <LoadCards cards={cards} decks={decks} params={params} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
