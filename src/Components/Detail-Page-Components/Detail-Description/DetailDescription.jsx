import React from 'react'

function DetailDescription({description}) {
  // const regex = /(<([^>]+)>)/ig;
  // const result = description.replace(regex, '');


  return (
    <div>
        <h1>Description</h1>
        <h3>{description}</h3>
    </div>
  )
}

export default DetailDescription