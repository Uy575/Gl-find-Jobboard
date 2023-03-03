import React from 'react'
import LatestSecurity from './LatestSecurity'
import { useSelector } from "react-redux";

function TopJobList() {
 
    const topProductsState = useSelector((state)=>state.topProducts)
    const {topProducts } = topProductsState;
    

  return (


     topProducts.map((topProduct)=>{
         return<LatestSecurity key={topProduct.id} topProduct = {topProduct}/>
        })
    
    
  )
}

export default TopJobList