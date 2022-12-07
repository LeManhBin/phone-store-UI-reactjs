import React from "react";
import "./cart.css";
const Cart = ({cartItem, addToCart, reduceQty}) => {
    const totalPrice = cartItem.reduce((price,item) => price + item.qty * item.price,0)
    return (
        <>
           <section className="cart-items">
                <div className="cart-container">
                    <div className="cart-details">
                        {cartItem.length === 0 && <h1 className="no-items product">Chưa có sản phẩm nào!</h1>}
                    
                    {cartItem.map((item) => {
                        const productQty = item.price * item.qty
                        return(
                            <div className="cart-list product">
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <h4>
                                    Đơn giá: {item.price} <br />
                                    <span>Thành tiền: {productQty}$</span>
                                    </h4>
                                </div>
                                <div className="cart-items-action">
                                    <div className="remove-cart">
                                        <button className="remove-cart">
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                    <div className="cart-control">
                                        <button className="redu-cart" onClick={() => reduceQty(item)}>
                                            <i class="fa-solid fa-minus"></i>
                                        </button> 
                                        <span>{item.qty}</span>   
                                        <button className="inc-cart" onClick={() => addToCart(item)}>
                                            <i class="fa-solid fa-plus"></i>
                                        </button>         
                                    </div>
                                </div>
                                <div className="cart-item-price">

                                </div>
                            </div>
                        )
                    })}
                    </div>
                    <div className="cart-total">
                        <h2>Thanh Toán</h2>
                        <div className="total-details">
                            <h3>Tổng Tiền</h3>
                            <h5>{totalPrice}$</h5>  
                        </div>    
                    </div>
                </div>
           </section>
        </>
    )
}
export default Cart