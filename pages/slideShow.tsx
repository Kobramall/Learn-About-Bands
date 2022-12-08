import React from "react"
import {Zoom} from 'react-slideshow-image'
import "react-slideshow-image/dist/styles.css"
import Image from 'next/image'

const SlideShow = (props) => {
    const images = props.images
    

    console.log(images);

    const zoomInProperties = {
        indicators: true,
        scale: 1.2,
        duration: 5000,
        transition:500,
        infinite:true,

        prevArrow:(
            <div style={{width:"30px", marginRight: "-30px", cursor:"pointer"}}>
                <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#2e2e2e">
                    <path d="M242 180.6v-138L0 2561242 213.4V331.2h270v180.6z"/>
                </svg>
            </div>
        ),

        nextArrow:(
            <div style={{width:"30px", marginLeft: "-30px", cursor:"pointer"}}>
                <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#2e2e2e">
                    <path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/>
                </svg>
            </div>
        )
    }
    
    return(
        <div className="h-full w-full">
            <h1>Fall out Boy!!!</h1>
            <Zoom {...zoomInProperties}>
                {images.map((each,index) =>(
                    <div key={index} className="flex justify-center w-full h-full">
                        <Image src={each} alt="slideshow" width={10000} height={10000} className="w-1/3 object-cover rounded-lg shadow-xl'"/>
                    </div>
                ))}
            </Zoom>
        </div>
    )
}


export default SlideShow