import React, { useEffect } from "react";
import DivBlockOnlyClass from "./DivBlockOnlyClass";
import ProductCard from "./ProductCard";
import Img1W from '../img/product-card/image.webp'
import Img1J from '../img/product-card/image.jpg'
import Img2W from '../img/product-card/image-02.webp'
import Img2J from '../img/product-card/image-02.jpg'
import "../components/main/main.css"

export default function Slider (){

    useEffect(() => {
        autoSlider();
        return () => clearTimeout(timer);
        }, []);
        
        let left = 0;
        let timer;
        
        function autoSlider() {
            timer = setTimeout(() => {
            const polosa = document.querySelector('.polosa');
            left -= 395;
            if (left <= -395 *6) {
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left + 'px';
        autoSlider();
        }, 3000);
        }


    return(
        <>
            <DivBlockOnlyClass className="slider">
                <DivBlockOnlyClass className="polosa">
                    <ProductCard srcSet={Img1W} src={Img1J} textButton='Add to cart'/>
                    <ProductCard srcSet={Img2W} src={Img2J} textButton='Add to cart'/>
                    <ProductCard srcSet={Img1W} src={Img1J} textButton='Add to cart'/>
                    <ProductCard srcSet={Img2W} src={Img2J} textButton='Add to cart'/>
                    <ProductCard srcSet={Img1W} src={Img1J} textButton='Add to cart'/>
                    <ProductCard srcSet={Img2W} src={Img2J} textButton='Add to cart'/>
                    <ProductCard srcSet={Img1W} src={Img1J} textButton='Add to cart'/>
                    <ProductCard srcSet={Img2W} src={Img2J} textButton='Add to cart'/>
                    <ProductCard srcSet={Img1W} src={Img1J} textButton='Add to cart'/>
                </DivBlockOnlyClass>
                <DivBlockOnlyClass className="products-slider__dotts dotts"></DivBlockOnlyClass>
            </DivBlockOnlyClass>
        </>
    )
}