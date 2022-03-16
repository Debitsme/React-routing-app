import React from 'react'
import { useParams } from 'react-router-dom'
 

function DetailQuote() {
  const params=useParams();
  return (
    <>

    <div>This is a DetailQuote page</div>
    <p>{params.anything}</p>
    </>
  )
}

export default DetailQuote