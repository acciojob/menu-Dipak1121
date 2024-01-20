import React, { useState } from "react";
import Data from "./Data.js";
import { lunch, breakFast, shakes } from "./Data.js";
import Card from "./Card.js";
import "../styles/App.css"


const App = ()=>{

    const [options, setOptions] = useState(Data);

    function allCategory(){
        setOptions(Data);
    }

    function breakfastCategory(){
        setOptions(breakFast);
    }

    function lunchCategory(){
        setOptions(lunch);
    }

    function shakesCategory(){
        setOptions(shakes);
    }

    return(
        <div id="main">
        <h1 className="heading">Our Menu</h1>
        <div className="buttons">
        <button onClick={allCategory}> All </button>
        <button onClick={breakfastCategory} id="filter-btn-1"> Breakfast </button>
        <button onClick={lunchCategory} id="filter-btn-2"> Lunch </button>
        <button onClick={shakesCategory} id="filter-btn-3"> Shakes </button>
        </div>
        <div className="card-container">
            {
                options.map((item, index)=>(
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
