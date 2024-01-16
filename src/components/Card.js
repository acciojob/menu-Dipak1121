import React from "react";

const Card = ({id, title, category, price, img, desc})=>{

    return (

        <div className="card">
            <div className="div-1">
                <img src={img} alt="No image found"></img>
            </div>
            <div className="div-2">
                <div className="div-3">
                    <h3 className="title">{title}</h3>
                    <h3 className="price">$ {price}</h3>
                </div>
                <div className="div-4">
                    <hr />
                    <p className="para">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;