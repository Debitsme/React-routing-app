import React from 'react'
import { useNavigate } from 'react-router-dom';
import QuoteForm from "../quotes/QuoteForm"
import useHttp from '../hooks/use-http';


function NewQuote() {
  const navigate=useNavigate()
  useHttp()

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