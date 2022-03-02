import { faUmbraco } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import card_image from "./../images/katie-zaferes.png"
import card_star from "./../images/star.png"

export default function Card(props) {
    console.log(props)
    let item = props
    let badgeText
    if (item.openSpot === 0) {
      badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
      badgeText = "ONLINE"
    }
    console.log(badgeText)
    return (
        <div className="card">
          {typeof badgeText !== "undefined" && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{item.stats.rating}</span>
                <span className="gray">({item.stats.reviewCount}) • </span>
                <span className="gray">{item.location}</span>
            </div>
            <p className="card--title">{item.title}</p>
            <p className="card--price"><span className="bold">From ${item.price}</span> / person</p>
        </div>
    )
}