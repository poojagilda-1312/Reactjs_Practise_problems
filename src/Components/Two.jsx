//implement a basic toggle  switch component
import React, { useState } from 'react'
export const Two = () => {
    const [isToggled,setIsToggled] = useState(false)
    const handleToggle = () =>{
           setIsToggled(!isToggled)
    }
  return (
    <div>

        <label>
            <input type='checkbox' onChange={handleToggle}></input>
          
        </label>
        <p>{isToggled ? 'on' : 'off'}</p>
       
    </div>
  )
}
