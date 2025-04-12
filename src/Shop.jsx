import React, { useRef } from "react";
import './style/shop.css';
import top1 from './style/images/top1.jpg';
import top2 from './style/images/top2.jpg';
import top3 from './style/images/top3.jpg';
import sw1 from './style/images/sweaty1.jpg';
import sw2 from './style/images/sweaty2.jpg';
import sw3 from './style/images/sweaty3.jpg';
import sho1 from './style/images/shoe1.jpg';
import sho2 from './style/images/shoe2.jpg';
import sho3 from './style/images/shoe3.jpg';


function Shop() {
    let imageContainerRef1 = useRef(null);
    let imageContainerRef2 = useRef(null);
    let imageContainerRef3 = useRef(null);
    const images1 = [top1, top2, top3];
    const images2 = [sw1, sw2, sw3];
    const images3 = [sho1, sho2, sho3];

    const prev1 = () => imageContainerRef1.current.scrollLeft -= 400;
    const next1 = () => imageContainerRef1.current.scrollLeft += 400;
    const prev2 = () => imageContainerRef2.current.scrollLeft -= 400;
    const next2 = () => imageContainerRef2.current.scrollLeft += 400;
    const prev3 = () => imageContainerRef3.current.scrollLeft -= 400;
    const next3 = () => imageContainerRef3.current.scrollLeft += 400;

    return (
        <div className="shop">
            <div className="container">
                <div className="content">
                    <div className="content1">
                        <div className="prev" onClick={prev1}></div>
                        <div className="slide-panel" ref={imageContainerRef1}>
                            {images1.map(image => {
                                return (<img src={image} alt="top image"/>)
                            })}
                        </div>
                        <div className="next" onClick={next1}></div>
                    </div>
                    <div className="content2">
                        <div className="prev" onClick={prev2}></div>
                        <div className="slide-panel" ref={imageContainerRef2}>
                            {images2.map(image => {
                                return (<img src={image} alt="sweatshirt image"/>)
                            })}
                        </div>
                        <div className="next" onClick={next2}></div>
                    </div>
                    <div className="content3">
                    <div className="prev" onClick={prev3}></div>
                        <div className="slide-panel" ref={imageContainerRef3}>
                            {images3.map(image => {
                                return (<img src={image} alt="shoes image"/>)
                            })}
                        </div>
                        <div className="next" onClick={next3}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;