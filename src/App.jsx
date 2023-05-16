import React from 'react';

export default function App(){
  const [isImportant,setIsImportant] = React.useState("Yes")
  
  function handleClick(){
    setIsImportant(isImportant === "Yes" ? "No" : "Yes");
  }
  
  
  
  
  return(
    <div className="state">
      <h1 className='state--title'>Is living important?</h1>
      <div className='state--value' onClick={handleClick}>
        <h1>{isImportant}</h1>
      </div>
    </div>
  )
}