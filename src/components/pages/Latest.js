import React from 'react';
import { Image, LatestContainer, LatestContainerRow, LatestWrpaper } from '../style/LatestStyle'
import Slider from 'react-slick';
import './scss/Slider.scss'
import Image1 from './image/Img1.jpg';

function Latest() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
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
                                        <a href>
                                            Design
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slider">
                            2
                        </div>
                    </Slider>
                </LatestContainerRow>
            </LatestContainer>
        </LatestWrpaper>
    );
}


export default Latest;