import React from 'react'
import { useParams } from 'react-router-dom'
import Highlighted from "../quotes/HighlightedQuote"
 

function DetailQuote() {
  const params=useParams();


  const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
  ];

  

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.anything);

    if (!quote) {
      return <p>No quote found!</p>;
    }

   
  return (
    <>
      <Highlighted text={quote.text} author={quote.author} />

    {/* <div>This is a DetailQuote page</div>
    <p>{params.anything}</p> */}
    </>
  )
}

export default DetailQuote