import React, { useEffect } from "react";
import { Link, Route, useRouteMatch, useHistory, Switch } from "react-router-dom";
import { deleteDeck, readDeck } from "../utils/api";
import CreateCard from "./CreateCard";
import EditCard from "./EditCard";
import EditDeck from "./EditDeck";


export default function ViewDeck({deck, setDeck}) {
  const { url, params, path } = useRouteMatch();
  const history = useHistory()



  useEffect(() => {
    const abortController = new AbortController();
    async function fetchDeck() {
      try {
        let fetchedDeck = await readDeck(params.deckId);
        setDeck(fetchedDeck);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log(error.name);
        } else {
          throw error;
        }
      }
    }
    fetchDeck();
    return () => {
      abortController.abort();
    };
  }, [params.deckId]); // add setDeck to dependencies


  const handleDeleteDeck = () => {
    const deleteBox = window.confirm(
      "Delete deck? \n \n You will not be able to recover it."
    );
        if (deleteBox) {
         console.log("please Delete deck")
    async function deleteDeckApiCall() {
        try {
        let newDeckList = await deleteDeck(params.deckId)   
        history.push('/')
        console.log(newDeckList) 

        } catch (error) {
            if (error.name === "AbortError") {
                console.log(error.name);
              } else {
                throw error;
              }
        }
    }

    deleteDeckApiCall()
        }
    
  }

  console.log("deck", deck.cards);


  const cardList = deck.cards.map((card) => (
    <div className="card container">
        <li className="row">
      <div className="col-6">
        <p> {card.front} </p>
      </div>
      <div className="col-6">
        <div>
          <p>{card.back}</p>
        </div>
        <div className="row" style={{display: "flex", justifyContent: "flex-end"}}>
          <Link to='' className="btn btn-secondary">Edit</Link>
          <Link to="" className="btn btn-danger">Delete</Link>
        </div>
      </div>
        </li>
    </div>
  ));

  const selectedCard = (
    <div className="container column">
      <div className="column">
        <h3> {deck.name} </h3>
        <p> {deck.description}</p>
      </div>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="row">
          <Link to={`${url}/edit`} className="btn btn-secondary" style={{ margin: "0 10px" }}>
            Edit
          </Link>
          <Link to={`${url}/study`} className="btn btn-primary" style={{ margin: "0 10px" }}>
            Study
          </Link>
          <Link to={`${url}/cards/new`} className="btn btn-primary" style={{ margin: "0 10px" }}>
            Add Cards
          </Link>
        </div>
        <div>
        <button
              type="delete"
              className="btn btn-danger"
              onClick={handleDeleteDeck}>
              Delete
            </button>
         
        </div>
      </div>
    </div>
  );

  const breadcrumb = (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {deck.name}
        </li>
      </ol>
    </nav>
  );

  return (
    <React.Fragment>

        <Switch>
            <Route exact path={`${path}/edit`}>
                <EditDeck />

            </Route>
            <Route path={`${path}/cards/new`}>

                <CreateCard />

            </Route>
            <Route path={`${path}/cards/:cardId/edit`} >

                <EditCard />
            </Route>

        </Switch>
      {breadcrumb}
      {selectedCard}
      <h2>Cards</h2>
      <ul>{cardList}</ul>
    </React.Fragment>
  );
}
