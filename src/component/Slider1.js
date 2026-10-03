import React, { useState, useRef } from "react";
import Slider from "react-slick";
import '../css/Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mediaItems = [
    { type: "image", url: "/warmshell2.png" },
    { type: "image", url: "/warmshell3.png" },
    { type: "image", url: "/warmshell4.png" },
    { type: "image", url: "/warmshell5.png" },
    { type: "image", url: "/warmshell6.png" },
    { type: "image", url: "/warmshell7.png" },
    { type: "video", url: "/video1.mp4", thumb: "/warmshell6.png" },
    { type: "video", url: "/video2.mp4", thumb: "/warmshell7.png" }
];

export default function Slider1({ onClose }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        afterChange: (current) => setActiveIndex(current)
    };

    return (
        <div className="slider-wrapper1">

            <div className="slider-header">
                <div className="curent_number_of_images">
                        {activeIndex + 1} / {mediaItems.length}
                </div>
            </div>

            <div className="displayq">

                <Slider ref={sliderRef} {...settings}>
                    {mediaItems.map((item, index) => (
                        <div key={index} className="slider_total">
                            {item.type === "image" ? (
                                <img className="images_slide" src={item.url} alt="" />
                            ) : (
                                <video className="images_slide" src={item.url} controls muted playsInline />
                            )}
                        </div>
                    ))}
                </Slider>

                <div className="my-custom-black-bar">
                    {mediaItems.map((item, index) => (
                        <div
                            key={index}
                            className={`thumb-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => sliderRef.current.slickGoTo(index)}
                        >
                            <img src={item.type === "video" ? item.thumb : item.url} alt="" />
                            {item.type === "video" && <span className="custom-play-icon">▶</span>}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
