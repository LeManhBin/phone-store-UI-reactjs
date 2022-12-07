import React from "react";


const Categories = () => {
    const data = [
        {
            cateImg: "./images/iphone.png",
            cateName: "Iphone"
        },
        {
            cateImg: "./images/ipad.png",
            cateName: "Ipad"
        },
        {
            cateImg: "./images/watch.png",
            cateName: "Apple Watch"
        },
        {
            cateImg: "./images/macbook.png",
            cateName: "Mac Book"
        },
        {
            cateImg: "./images/apple-tv.png",
            cateName: "Apple TV"
        },
        {
            cateImg: "./images/desktop.png",
            cateName: "Mac"
        },
        {
            cateImg: "./images/airpods.png",
            cateName: "Airpods"
        }
    ]
    return (
        <>
            <div className="category">
                {
                    data.map((value, index)=> {
                        return(
                            <div className="box" key={index} alt=''>
                                <img src={value.cateImg}/>
                                <span>{value.cateName}</span>
                            </div>
                        )
                    })
                }
            </div>
            
        </>
    )
}
export default Categories