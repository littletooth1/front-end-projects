import './Carousel.css';
import carouselSrc from "./carouselSrc";
import {useState} from "react";

function Carousel() {
    const [picNum, setPicNum] = useState(0);
    return (
        <div className="carousel">
            <button className="carousel-button" onClick={() => setPicNum(picNum > 0 ? picNum - 1 : carouselSrc.length - 1)}>&#10094;</button>
            <img className="carousel-picture" src={carouselSrc[picNum].src} alt={carouselSrc[picNum].alt}/>
            <button className="carousel-button" onClick={() => setPicNum(picNum < carouselSrc.length - 1 ? picNum + 1 : 0)}>&#10095;</button>
        </div>
    );

}

export default Carousel;