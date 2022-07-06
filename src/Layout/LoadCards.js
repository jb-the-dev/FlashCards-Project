import React, {useEffect, useState} from "react";
import {Link,} from "react-router-dom";
import { readDeck } from "../utils/api";




export default function LoadCards({ cards, decks, params }) {
const [card, setCard] = useState(cards[1])
const [deck, setDeck] =useState({})
useEffect(()=>{

    const abortController = new AbortController();
    async function fetchDeck(){
        try{
        let fetchedDeck = await readDeck(params.deckId, )
        setDeck(fetchedDeck)
        } catch (error) {
            if(error.name === "AbortError"){
              console.log(error.name)
          }else {
            throw error
          }
          }
    }
    fetchDeck()
    return () => {
        abortController.abort()
        
      }
},[])
console.log("deck",deck.cards)



  const pageCard = (
    <div key={card.id} class="card w-50">
      <div class="card-body">
        <div
          class="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 10px",
          }}
        >
         
          <p>  cards</p>
        </div>
        <p class="card-text">{card.front}</p>
        <div
          class="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 10px",
          }}
        >
          <div class="row" style={{ display: "flex", margin: "0 5px" }}>
            <button class="btn btn-secondary">
              Flip
            </button>
            <button onClick={()=>setCard.index+=1}to="" class="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return pageCard;
}