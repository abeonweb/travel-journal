import React from "react"
import data from "./data"
import Card from "./Card"
import Header from "./Header"

export default function App(){
    const dataCards = data.map(card => getCard(card))
    return (
        <div className="App">
            <Header />
            {dataCards}
        </div>
    )
}

function getCard(card){
    return <Card 
        key={card.id}
        stats={card}
    />
}