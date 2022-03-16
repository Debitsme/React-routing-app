import React from 'react'
import QuoteForm from "../quotes/QuoteForm"

function NewQuote() {

  const AddQue=data=>{
    console.log(data);
  }

  
  return (
    <QuoteForm onAddQuote={AddQue}/>

  )
}

export default NewQuote;