import React from "react";
import Header from "../Header";
import Link from "next/link";


const NirvanaHome = () =>{
 
    return(
<div className="nirvanaHome h-screen w-screen text-center">
          <Header />
          <h1 className="text-white opacity-80 text-2xl mt-16">Learn more about Nirvana or take a quiz to test your knowledge</h1>
        <div className="nirvanaNav  text-white flex justify-evenly text-xl bg-gradient-to-r from-yellow-600 to-transparent opacity-50 h-16">
           <div className="flex justify-center"><Link href="/nirvana/career" className="mt-4">Career</Link></div>
           <div className="flex justify-center"><Link href="/" className="mt-4">Fun Facts</Link></div>
           <div className="flex justify-center"><Link href="/" className="mt-4">Stats</Link></div>
           <div className="flex justify-center"><Link href="/" className="mt-4">Quiz</Link></div>  
        </div> 
        <audio className="opacity-0" controls autoPlay><source src="../../nirsound.mp3" type="audio/mpeg"/></audio>
      </div>
    )
}


export default NirvanaHome