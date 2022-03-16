import React from 'react'
import { useParams, Link, Route, Routes } from 'react-router-dom'
import Highlighted from "../quotes/HighlightedQuote"
import Comments from "../comments/Comments"


function DetailQuote() {
  const params = useParams();


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

      <div className='centered'>
        <Link to='comment' className='btn--flat'>
          Show Comment

        </Link>
      </div>


      <Routes>
        <Route path='comment' element={<Comments />} />
      </Routes>

      {/* <div>This is a DetailQuote page</div>
    <p>{params.anything}</p> */}
    </>
  )
}

export default DetailQuote