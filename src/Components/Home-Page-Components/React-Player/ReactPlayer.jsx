import ReactPlayer from 'react-player'
import React, { useState } from 'react'

function ReactIframe() {
  
  return (
    <div className='reactPlayer container'>
      <ReactPlayer controls = {true} playing ={true} width = '730px'
       url="https://getlicensed.wistia.com/medias/52qyre57w3"/>
    </div>
  )
}

export default ReactIframe;