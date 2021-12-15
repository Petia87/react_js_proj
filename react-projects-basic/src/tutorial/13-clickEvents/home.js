import React from 'react';

const Home  = () => {
  const handleClick=(e)=>{
    console.log("petia",e);
  }
  const handleClickAgain=(name,e)=>{
    console.log("petia"+name,e.target);
  }
  return (
    <div >
<h2>Homepage</h2>
<button onClick={handleClick}>Click me</button>
<button onClick={(e)=>handleClickAgain("Spasova",e)}>Click me</button>
    </div>
    );
}
 
export default Home;