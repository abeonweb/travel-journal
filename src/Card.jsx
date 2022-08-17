import React from "react"
import locationIcon from "./assets/locationIcon.svg"

export default function Card(props){
    
    return (
        <div className="card">
            <div className="card--location-info">
                <div>
                    <img src={locationIcon} alt=""/>
                    <span className="card--location">{props.stats.location}</span>
                    <a className="card--map" href={props.stats.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.stats.title}</h2>
                <p className="card--date">{props.stats.startDate} - {props.stats.endDate}</p>
                <p className="card--desc">{props.stats.description}</p>
            </div>

            <img className="card--image" src={props.stats.imageUrl} alt={props.stats.alt}/>
        </div>
    )
}