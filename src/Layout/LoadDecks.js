import React, {useEffect} from "react";
import {Link,} from "react-router-dom"


function LoadDecks({decks, setDecks, cards, setCards}) {




    useEffect(() => {

        const abortController = new AbortController();

        async function getDecks(){
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
        
        getDecks()
     
        return () => {
          abortController.abort()
          
        }

        
    }, [setDecks])


    useEffect(() => {

      const abortController = new AbortController();

      async function getCards(){
          try {
          const response = await fetch("http://localhost:8080/cards", 
         {signal: abortController.signal});
         const data = await response.json();
          setCards(data)         

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

      
  }, [setCards])

   


    const deckList = decks.map((deck) => (
      <div key={deck.id} class="card w-50">
      <div class="card-body">
        <div class="row" style={{display: "flex", justifyContent: "space-between", margin: "0 10px"}}>
          <h5 class="card-title"> {deck.name} </h5>
          <p> {cards.filter((card) => card.deckId === deck.id).length} cards</p> 
        </div>
        <p class="card-text">
          {deck.description}
        </p>
        <div class="row" style={{display: "flex", justifyContent: "space-between", margin: "0 10px"}}>
          <div class="row" style={{display: "flex", margin: "0 5px"}}>
        <Link to={`/decks/${deck.id}`} class="btn btn-secondary">
          View
        </Link>
        <Link to={`/decks/${deck.id}/study`} class="btn btn-primary">
          Study
        </Link>
        </div>
        <div>
        <button
        type="delete"
        class="btn btn-danger"
        onClick={() => window.confirm("Delete this deck? /n /n You will not be able to recover it.")}
        >
        Delete

        </button>
        </div>
        </div>
      </div>
    </div>




    ))



  return deckList
   
    



}

export default LoadDecks;

