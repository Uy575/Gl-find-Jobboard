import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./reactcarousal.css";
import LatestSecurity from "../../Home-Page-Components/../Home-Page-Components/latest_security/LatestSecurity";
import { useSelector } from "react-redux";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ReactCarousals = ({ topList }) => {
  const topProductsState = useSelector((state) => state.topProducts);
  const { topProducts } = topProductsState;
  return (
    <Carousel
      responsive={responsive}
      arrows={true}
      swipeable={false}
      draggable={false}
    >
      {topProducts.map((topProduct) => {
        return <LatestSecurity key={topProduct.id} topProduct={topProduct} />;
      })}
    </Carousel>
  );
};

export default ReactCarousals;
