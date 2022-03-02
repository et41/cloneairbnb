import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card 
                key = {item.id}
                {...item}/*it's called spread syntax. creates item predecessor like item.coverImg*/
                 
                /*item = {item} pass all object data to card element with the name of item*/
               /* img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpot = {item.openSpots}*/
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}