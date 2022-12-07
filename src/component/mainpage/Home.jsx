import React from "react";
import Categories from "./Categories";
import SlideCard from "./SlideCard";
import Slider from "./Slider";

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="container">
                    <Categories/>
                    <Slider/>
                </div>
            </section>
        </>
    )
}

export default Home