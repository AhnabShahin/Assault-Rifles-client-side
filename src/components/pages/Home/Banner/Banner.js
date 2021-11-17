import React, { Component } from "react";
import bannerImg1 from '../../../../assets/images/banner1.png'
import bannerImg2 from '../../../../assets/images/banner2.png'
import bannerImg3 from '../../../../assets/images/banner3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import './Banner.css';

const Banner = () => {
    const settings = {
        fade: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        appendDots: dots => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>;
        },
    };
    return (

  
            <Slider {...settings}>

                <div className="banner-slider">
                    <img className="w-100 h-100 position-absolute" src={bannerImg1} alt="" />
                    <Container className="h-100 w-100">
                        <div className="banner-text-container">
                            <div className="banner-text center">
                                <h1>MC5 Carbine</h1>
                                <h5>Built from a forged upper and lower AR-15 receiver with a standard barrel nut interface and mil-spec controls; The MC6 is made for abuse and high round counts.</h5>
                                <button className="main-button"><span>Know More</span></button>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="banner-slider">
                    <img className="w-100 h-100 position-absolute" src={bannerImg2} alt="" />
                    <Container className="h-100 w-100">
                        <div className="banner-text-container">
                            <div className="banner-text right">
                                <h1>MC5 Carbine</h1>
                                <h5>Built from a forged upper and lower AR-15 receiver with a standard barrel nut interface and mil-spec controls; The MC6 is made for abuse and high round counts.</h5>
                                <button className="main-button"><span>Know More</span></button>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="banner-slider">
                    <img className="w-100 h-100 position-absolute" src={bannerImg3} alt="" />
                    <Container className="h-100 w-100">
                        <div className="banner-text-container">
                            <div className="banner-text left">
                                <h1>MC5 Carbine</h1>
                                <h5>Built from a forged upper and lower AR-15 receiver with a standard barrel nut interface and mil-spec controls; The MC6 is made for abuse and high round counts.</h5>
                                <button className="main-button"><span>Know More</span></button>
                            </div>
                        </div>
                    </Container>
                </div>
            </Slider>


    );
};

export default Banner;