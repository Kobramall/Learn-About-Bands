import React from "react";
import Header from "../Header";
import Link from "next/link";
import Img from "../../public/fbStart.jpg"


const GunHome = () =>{
 
    return(
      <div className="gunsHome h-screen w-screen text-center">
          <Header />
          <h1 className="text-white opacity-50 text-2xl mt-16">Learn more about Guns N Roses or take a quiz to test your knowledge</h1>
        <div className="gunsNav flex justify-evenly text-xl bg-gradient-to-r from-gray-400 to-transparent opacity-50 h-16 text-white">
            <div className="flex justify-center"><Link href="/guns&roses/career" className="mt-4">Career</Link></div>
            <div className="flex justify-center"><Link href="/guns&roses/funfact" className="mt-4">Fun Facts</Link></div>
            <div className="flex justify-center"><Link href="/guns&roses/stats" className="mt-4">Stats</Link></div>
            <div className="flex justify-center"><Link href="/" className="mt-4">Quiz</Link> </div> 
        </div> 
        <audio className="opacity-0" controls autoPlay><source src="../../gunsSound.mp3" type="audio/mpeg"/></audio>
      </div>
    )
}


export default GunHome