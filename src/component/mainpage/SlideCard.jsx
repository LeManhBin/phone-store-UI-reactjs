import React from "react";
import SlideData from "./SlideData";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Home.css"

const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
        <Slider {...settings}>
            {SlideData.map((value, index)=>{
                return (
                <>
                    <div className="box-slide" key={index}>
                        <div className="slide">
                            <img src={value.cover} alt="" />
                        </div>
                    </div>
                </>
                )
            })}
        </Slider>
        </>
    )
}

export default SlideCard
