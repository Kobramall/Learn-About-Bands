import React from "react";
import Header from "../Header";


const NirvanaHome = () =>{
 
    return(
<div className="nirvanaHome h-screen w-screen text-center">
          <Header />
          <h1 className="text-white opacity-80 text-2xl mt-16">Learn more about Nirvana or take a quiz to test your knowledge</h1>
        <div className="nirvanaNav flex justify-evenly text-xl bg-black opacity-50 h-16">
          <button className="text-white border-white border-lg">Early Career</button>
          <button className="text-white">Career</button>
          <button className="text-white">Stats</button>
          <button className="text-white">Quiz</button>  
        </div> 
      </div>
    )
}


export default NirvanaHome