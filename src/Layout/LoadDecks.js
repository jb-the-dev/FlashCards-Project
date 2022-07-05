import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"

function LoadDecks() {



    const [decks, setDecks] = useState([])
    

    useEffect(() => {

        const abortController = new AbortController();

        async function getCards(){
            try {
            const response = await fetch("http://localhost:8080/decks", 
           {signal: abortController.signal});
           const data = await response.json();
            setDecks(data)         

            } catch (error) {
              if(error.name === "AbortError"){
                console.log(error.name)
            }else {
              throw error
            }
            }
            
        }
        
        getCards()
     
        return () => {
          abortController.abort()
          
        }

        
    }, [])


    const deckList = decks.map((deck) => (
      <div key={deck.id} class="card w-50">
      <div class="card-body">
        <div class="row" style={{display: "flex", justifyContent: "space-between", margin: "0 10px"}}>
          <h5 class="card-title"> {deck.name} </h5>
          <p> AMOUNT_OF cards</p> 
        </div>
        <p class="card-text">
          {deck.description}
        </p>
        <div class="row" style={{display: "flex", justifyContent: "space-between", margin: "0 10px"}}>
          <div class="row" style={{display: "flex", margin: "0 5px"}}>
        <Link to={`/decks/${deck.id}`} class="btn btn-secondary">
          View
        </Link>
        <Link to={`/decks/${deck.id}`} class="btn btn-primary">
          Study
        </Link>
        </div>
        <div>
        <Link to={`/decks/${deck.id}`} class="btn btn-danger">
          Delete
        </Link>
        </div>
        </div>
      </div>
    </div>




    ))



  return deckList
}

export default LoadDecks;
