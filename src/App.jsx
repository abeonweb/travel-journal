import React from "react"
import data from "./data"
import Card from "./Card"
import Header from "./Header"

export default function App(){
    const [cardData, setCardData] = React.useState(data)
    const dataCardsArray = cardData.map(card => getCard(card))
    
    
    return (
        <div className="App">
            <Header />
            {dataCardsArray}
        </div>
    )
}

function getCard(card){
    return <Card 
        key={card.id}
        stats={card}
    />
}