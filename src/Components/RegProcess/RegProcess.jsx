

import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../Assets/1.png"
import image2 from "../Assets/2.png"
import image3 from "../Assets/3.png"
import image4 from "../Assets/4.png"
import image5 from "../Assets/5.png"
import Footer from '../footer/footer';
import Navbar from '../Navbar/navbar';
import "./reg.css"

const RegProcess = () => {
    return <>
        <Navbar pg="process"/>
        <div className="regProcess">
            <p id="process">Registration Process</p>
            {/* <p id="process">Registrations will be live soon.</p> */}
            <img src={image1} alt='' className="carouselImg" />
            <img src={image2} alt='' className="carouselImg" />
            <img src={image3} alt='' className="carouselImg" />
            <img src={image4} alt='' className="carouselImg" />
            <img src={image5} alt='' className="carouselImg" />
            {/* <div className="carousel"> */}
                {/* <Carousel showThumbs={false} showArrows={true} autoPlay={false} interval={2000}> */}

                    {/* <img src={image1} className="carouselImg" />

                    <img src={image2} className="carouselImg" />

                    <img src={image3} className="carouselImg" /> */}

                {/* </Carousel> */}
            {/* </div> */}
        </div>
        <Footer />
    </>
}

export default RegProcess