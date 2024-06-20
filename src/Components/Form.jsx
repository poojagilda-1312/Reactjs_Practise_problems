import React, { useState } from 'react'

export const Form = () => {
  const [input,setInput] = useState('')
  return (
    <div>
      
      <input type='text' value = {input} onChange={(e)=>{setInput(e.target.value)}}></input>
      <p>user input : {input} </p>
      
    </div>
  )
}
