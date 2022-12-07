import React from "react";
import {Ndata} from "./Ndata"
import "./style.css"
const CartNew = () => {
    console.log(Ndata);
    return (
        <>
            <div className="cart-content">
            {Ndata.map((val, index) => {
                return (
                <div className='box' key={index}>
                    <div className='img'>
                        <img src={val.cover} alt='' />
                    </div>
                    <div className="detail">
                        <h4>{val.name}</h4>
                        <span>{val.price}$</span>
                    </div>
                </div>
            )
            
        })}
            </div>
        </>
    )
    
}
export default CartNew