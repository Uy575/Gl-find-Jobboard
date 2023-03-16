import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Pagination, Navigation ,Autoplay } from "swiper";
import LatestSecurity from "../../Home-Page-Components/latest_security/LatestSecurity";
import "swiper/css/navigation";
import 'swiper/css/autoplay'
import './reactcarousal.css'
const ReactCarousals = ({ topList }) => {
  const topProductsState = useSelector((state) => state.topProducts);
  const { topProducts } = topProductsState;
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}    
      speed={800}
      breakpoints={{
        
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          Navigation:false
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation ,Autoplay ]}
      autoplay={true}
      className="mySwiper"
      
    >
      {topProducts.map((topProduct) => {
        return (
          <SwiperSlide  key={topProduct.id}>
            <LatestSecurity key={topProduct.id} topProduct={topProduct} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReactCarousals;
