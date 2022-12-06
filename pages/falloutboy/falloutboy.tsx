import React from "react";
import  Link  from "next/link";
import Header from "../Header";




const FallHome = () =>{
 
    return(
      <div className="falloutHome h-screen w-screen text-center">
          <Header />
          <h1 className="text-white opacity-50 text-2xl mt-16">Learn more about Fall Out Boy or take a quiz to test your knowledge</h1>
        <div className="falloutNav flex justify-evenly text-xl bg-gradient-to-r from-indigo-500 to-transparent opacity-50 h-16 text-white">
          <Link href="/falloutboy/career" className="mt-4">Career</Link>
          <Link href="/" className="mt-4"><p>Fun Facts</p></Link>
          <Link href="/" className="mt-4">Stats</Link>
          <Link href="/" className="mt-4">Quiz</Link>  
        </div>
        <audio className="opacity-0" controls autoPlay><source src="../../falloutsound.mp3" type="audio/mpeg"/></audio>
      </div>

    )
}


export default FallHome