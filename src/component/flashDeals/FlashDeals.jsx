import React from "react";
import FlashCard from "./FlashCard";

const FlashDeals = ({productItems, addToCart}) => {
    return (
        
        <>
            <section className="flash background" >
                <div className="flash-container">
                    <div className="heading">
                        <i class="fa-solid fa-bolt"></i>
                        <h1>Flash Deals</h1>
                    </div>
                    <div className="card-container">
                        <FlashCard productItems={productItems} addToCart={addToCart}/>
                    </div>

                </div>
            </section>
        </>
    )
}
export default FlashDeals