import React from 'react'

function ShortDetail({heading,Image,title}) {
  return (
    <div>
        <h3>{heading}</h3>
       <div> <img src={Image} alt='title' height='30px' /> <span>{title}</span> </div>
    </div>
  )
}

export default ShortDetail