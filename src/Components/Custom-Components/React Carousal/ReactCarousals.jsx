import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './reactcarousal.css'
<link href="//db.onlinewebfonts.com/c/0e979bd4a3c1c6ac788ed57ac569667f?family=revicons" rel="stylesheet" type="text/css"/>



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
const ReactCarousals = ({topList}) => {
  return (
<Carousel responsive={responsive} arrows={true } swipeable={false}
  draggable={false}
>
  {/* <div className='div2'> {topList}</div> */}
 
 <div className='div1'>{topList}</div>
 <div className='div3'>item</div>
 <div>item</div>
 <div>item</div>

</Carousel>
  )
}

export default ReactCarousals
