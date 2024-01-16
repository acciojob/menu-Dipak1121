import React from "react";
import Data from "./Data.js";
import Card from "./Card.js";
import "../styles/App.css"

const App = ()=>{

    return(
        <div className="main">
        <h1 className="heading">Our Menu</h1>
        <div className="card-container">
            {
                Data.map((item, index)=>(
                    <Card id={item.id}
                    title={item.title}
                    category = {item.category}
                    price={item.price}
                    img={item.img}
                    desc={item.desc}/>
                ))
            }
        </div>
        </div>
    )
}

export default App;
