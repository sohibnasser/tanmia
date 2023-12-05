import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img4 from "./image/Hyaluronic Acid Serum.jpg";
import img1 from "./image/MacBook Pro.png";
import img5 from "./image/Samsung Universe 9.jpg";
import img3 from "./image/Tree Oil 30ml.jpg";
import img2 from "./image/iPhone 9.jpg";



export default function SlideImage() {
  return (
    <>
      <Swiper  style={{width : "100%" , height : "100%"}}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        spaceBetween={30}
        effect={'fade'}
        modules={[Autoplay ,EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide style={{width : "100%" , height : "100%"}}>
          <img style={{width : "100%" , height : "100%"}} src={img1} alt="img1"/>
        </SwiperSlide>
        <SwiperSlide style={{width : "100%" , height : "100%"}}>
          <img style={{width : "100%" , height : "100%"}} src={img2} alt="img2"/>
        </SwiperSlide>
        <SwiperSlide style={{width : "100%" , height : "100%"}}>
          <img style={{width : "100%" , height : "100%"}} src={img3} alt="img3"/>
        </SwiperSlide>
        <SwiperSlide style={{width : "100%" , height : "100%"}}>
          <img style={{width : "100%" , height : "100%"}} src={img4} alt="img4"/>
        </SwiperSlide>
        <SwiperSlide style={{width : "100%" , height : "100%"}}>
          <img style={{width : "100%" , height : "100%"}} src={img5} alt="img5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
