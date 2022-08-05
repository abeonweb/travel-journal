import React from "react"
import globe from "./assets/headerGlobe.svg"
export default function Header(){
    return (
        <header className="header">
            <img className="header--image" src={globe} alt="" />
            <h1 className="header--title">my travel journal.</h1>
        </header>
    )
}