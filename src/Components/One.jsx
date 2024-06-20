import React from 'react'
//displaying a list of items  from array
export const One = () => {
    const items = ['item1','item2','item3','item4','item5']
  return (  
    <div>
        <ul>
            {items.map((item,index)=>{
                return <li key={index}>{item}</li>  

            })}
        </ul>
    </div> 
  )
}
