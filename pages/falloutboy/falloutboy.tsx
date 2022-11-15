import React from "react";
import Header from "../Header";




const FallHome = () =>{
 
    return(
      <div className="falloutHome h-screen w-screen text-center">
          <Header />
          <h1 className="text-white opacity-50 text-2xl mt-16">Learn more about Fall Out Boy or take a quiz to test your knowledge</h1>
        <div className="falloutNav flex justify-evenly text-xl bg-black opacity-50 h-16">
          <button className="text-white border-white border-lg">Early Career</button>
          <button className="text-white">Career</button>
          <button className="text-white">Stats</button>
          <button className="text-white">Quiz</button>  
        </div> 
      </div>

    )
}


export default FallHome