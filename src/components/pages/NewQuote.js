import React from 'react'
import { useNavigate } from 'react-router-dom';
import QuoteForm from "../quotes/QuoteForm"


function NewQuote() {
  const navigate=useNavigate()

  const AddQue=data=>{
    console.log(data);
    //COULD ALSO BE USED WITH A BUTTON, USEcLICK
    navigate('/quotes')
  }

  
  return (
    <QuoteForm onAddQuote={AddQue}/>

  )
}

export default NewQuote;