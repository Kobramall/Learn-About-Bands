import React from "react";
import Header from "../Header";
import Link from "next/link";


const MetllicaHome = () =>{
 
    return(
      <div className="metllicaHome h-screen w-screen text-center align-middle">
      <Header />
      <h1 className="text-white opacity-50 text-2xl mt-16">Learn more about Metallica or take a quiz to test your knowledge</h1>
    <div className="metllicaNav text-white flex justify-evenly text-xl bg-gradient-to-r from-red-900 to-transparent opacity-50 h-16">
          <div className="flex justify-center"><Link href="/metllica/career" className="mcareer mt-4">Career</Link></div>
          <div className="flex justify-center"><Link href="/" className="mt-4">Fun Facts</Link></div>
          <div className="flex justify-center"><Link href="/" className="mt-4">Stats</Link></div>
          <div className="flex justify-center"><Link href="/" className="mt-4">Quiz</Link></div>  
    </div> 
    <audio className="opacity-0" controls autoPlay><source src="../../metllicasound.mp3" type="audio/mpeg"/></audio>
  </div>
    )
}


export default MetllicaHome