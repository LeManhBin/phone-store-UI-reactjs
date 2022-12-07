import React from "react";
import TopCart from "./TopCart";
import "./Style.css";

const TopCate = () => {
    return(
        <>
            <section className="top-cate">
                <div className="container">
                    <div className="heading-cate">
                        <div className="heading-left">
                            <i class="fa-solid fa-border-all"></i>
                            <h2>Top Categories</h2>
                        </div>
                        <div className="flex-top">
                            <TopCart/>
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

export default TopCate