/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Image, Image2, LatestContainer, LatestContainerRow, LatestWrpaper } from '../style/LatestStyle'
import Slider from 'react-slick';
import './scss/Slider.scss'
import Image1 from './image/Img1.jpg';
import Image3 from './image/Img2.jpg';
import Image4 from './image/Img3.jpg';
// import Image5 from './image/Img4.jpg';
import Image6 from './image/Img5.jpg';

function Latest() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        rows: 1,
    }
    return (
        <LatestWrpaper>
            <LatestContainer>
                <LatestContainerRow>
                    <Slider {...settings}>
                        <div className="swiper-slider">
                            <div className="item">
                                <div className="item_holder">
                                    <Image src={Image1} />
                                </div>
                                <div className="item_title">
                                    <h3>
                                        Patones
                                    </h3>
                                    <p>
                                        <a href="/">
                                            Technology
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_holder2">
                                    <Image2 src={Image3} />
                                </div>
                                <div className="item_title2">
                                    <h3>
                                        Patones
                                    </h3>
                                    <p>
                                        <a href="/">
                                            Technology
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_holder">
                                    <Image src={Image4} />
                                </div>
                                <div className="item_title">
                                    <h3>
                                        Patones
                                    </h3>
                                    <p>
                                        <a href="/">
                                            Technology
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_holder2">
                                    <Image2 src={Image6} />
                                </div>
                                <div className="item_title2">
                                    <h3>
                                        Patones
                                    </h3>
                                    <p>
                                        <a href="/">
                                            Technology
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slider">
                            <div className="item2">
                                <Image2 src={Image6} />
                            </div>
                            <div className="item_title4">
                                <h3>
                                    sGreen Leves
                                </h3>
                                <p>
                                    <a href="#">
                                        Design
                                    </a>
                                </p>
                                <div className="item3">
                                    <Image2 src={Image6} />
                                </div>
                                <div className="item_title5">
                                    <h3>
                                        sGreen Leves
                                </h3>
                                    <p>
                                        <a href="#">
                                            Design
                                    </a>
                                    </p>
                                </div>
                                <div className="item4">
                                    <Image2 src={Image6} />
                                </div>
                                <div className="item_title6">
                                    <h3>
                                        sGreen Leves
                                </h3>
                                    <p>
                                        <a href="#">
                                            Design
                                    </a>
                                    </p>
                                </div>
                            </div>


                        </div>
                    </Slider>
                </LatestContainerRow>
            </LatestContainer>
        </LatestWrpaper>
    );
}


export default Latest;