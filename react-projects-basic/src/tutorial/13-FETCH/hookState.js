import React, { useState } from 'react';

const HookState = () => {
  const [name, setName] = useState('petia')
  const [age, setAge] = useState(25)
  const handleClick = () => {
    setName('Iva')
    setAge(33)
  }

  return (
    <div className='container'>
      <h2>{name}is{age}</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default HookState;