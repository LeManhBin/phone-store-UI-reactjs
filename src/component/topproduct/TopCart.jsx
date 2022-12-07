import React from "react";
import Tdata from "./TopData";
import "./Style.css"
import Slider from "react-slick";
const TopCart = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <>
        <Slider {...settings}>
            {
                Tdata.map((value, index) => {
                    return(
                        <div className="top-product" key={index}>
                            <div className="nametop">
                                <span className="top-left">{value.para}</span>
                                <span className="top-right">{value.desc}</span>
                            </div>
                            <div className="img">
                                <img src={value.cover} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
        </>
    )
}
export default TopCart