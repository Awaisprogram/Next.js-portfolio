import React from 'react'

function Heading({heading}:{heading:string}) {
  return (
    <div className="heading">
    <h1>{heading}</h1>
  </div> 
  )
}

export default Heading
