import React from 'react'
import LatestSecurity from './LatestSecurity'
import { useSelector } from "react-redux";

function TopJobList() {
 
    const topProductsState = useSelector((state)=>state.topProducts)
    const {topProducts } = topProductsState;
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
     topProducts.map((topProduct)=>{
         return<LatestSecurity key={topProduct.id} topProduct = {topProduct}/>
})
  )
}

export default TopJobList