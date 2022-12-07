import React from "react";
import Footer from "../commom/footer/footer";
import FlashDeals from "../component/flashDeals/FlashDeals";
import Home from "../component/mainpage/Home";
import NewArrivals from "../component/newarrivals/NewArrivals";
import TopCate from "../component/topproduct/TopCate";

const Pages = ({productItems, cartItem, addToCart}) => {
    return (
        <>
            <Home cartItem={cartItem}/>
            <FlashDeals productItems={productItems} addToCart={addToCart}/>
            <TopCate/>
            <NewArrivals/>
            <Footer/>
        </>
    )
}

export default Pages