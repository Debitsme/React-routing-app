import React from 'react'
// import { useParams } from 'react-router-dom'
// import { Fragment } from 'react/cjs/react.production.min'
// import Comments from '../comments/Comments'
// import { Routes, Route } from "react-router-dom";
import QuoteList from '../quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];


function AllQuote() {

    return (
        <QuoteList quotes={DUMMY_QUOTES} />


        // <Fragment>
        //     <div>This is an AllQuote Page</div>
        //     <p>{custom.extra}</p>
        //     <Routes>
        //     <Route path='comment' element={<Comments />} />
        //     </Routes>


        // </Fragment>
    )
}

export default AllQuote