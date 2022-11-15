import React from "react";
import Header from "../Header";


const GunHome = () =>{
 
    return(
      <div className="gunsHome h-screen w-screen text-center">
          <Header />
          <h1 className="text-white opacity-50 text-2xl mt-16">Learn more about Guns N Roses or take a quiz to test your knowledge</h1>
        <div className="gunsNav flex justify-evenly text-xl bg-black opacity-50 h-16">
          <button className="text-white border-white border-lg">Early Career</button>
          <button className="text-white">Career</button>
          <button className="text-white">Stats</button>
          <button className="text-white">Quiz</button>  
        </div> 
      </div>
    )
}


export default GunHome