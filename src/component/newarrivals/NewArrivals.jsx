import React from "react";
import CartNew from "./CartNew";
import "./style.css"

const NewArrivals = () => {
    return(
        <>
            <section className="new-arrivals">
                <div className="container">
                    <div className="heading-cate">
                        <div className="heading-left">
                        <i class="fa-solid fa-star"></i>
                            <h2>New Product</h2>
                        </div>
                        <div className="flex-top">
                            <CartNew/>
                        </div>
                        <div className="heading-right">
                            <span>View all</span>
                            <i class="fa-solid fa-caret-right"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NewArrivals