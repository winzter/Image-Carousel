import { useState } from "react"
import ImageData from "./imageData"
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai'

const ImageSlider = ()=>{
    const [current,setCurrent] = useState(0);
    const length = ImageData.length;

    const prevSlide = ()=>{
        current === 0 ? setCurrent(length-1) : setCurrent(current-1)
    }

    const nextSlide = ()=>{
        current === length-1 ? setCurrent(0) : setCurrent(current+1);
    }

    return(
        <section className="slider">
            <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide}/>
            <AiOutlineArrowRight className="rightArrow" onClick={nextSlide}/>
            {ImageData.map((data ,index)=>{
                return(
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === current && (
                            <div>
                                <img src={data.image} alt={data.title} className="image"/>
                                <p>{data.title}</p>
                            </div>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider