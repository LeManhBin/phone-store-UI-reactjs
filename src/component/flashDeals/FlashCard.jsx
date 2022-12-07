import React, { useState } from "react";
import Slider from "react-slick";

const NextArrow = (props)=>{
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
}
const PrevArrow = (props)=>{
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i class="fa-solid fa-arrow-left"></i>
            </button>
        </div>
    )
}
const FlashCard = ({ productItems, addToCart }) => {
const [count, setCount] = useState(0)
const increment = () => {
    setCount(count + 1);
}


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    return (
        <>
        <Slider {...settings}>
        {productItems.map((productItems) => {
            return(
                <>
                <div className="box">
                    <div className="product">
                        <div className="img">
                            <span className="discount">{productItems.discount}% Off</span>
                            <img src={productItems.cover} alt="" />
                            <div className="product-like">
                                <label>{productItems.name}</label><br />
                                <h3></h3>
                                <i class="fa-regular fa-heart" onChangeCapture={increment}></i>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="rate">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className="price">
                                <h4>{productItems.price}$</h4>
                                <button onClick={() => addToCart(productItems)}>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )
            })
        }
         </Slider>
        </>
       
    )
}

export default FlashCard