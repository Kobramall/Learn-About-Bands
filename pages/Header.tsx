import React from "react";
import Link from "next/link"

const Header = () =>{
   
    return(
       <div className="bg-black flex justify-evenly p-2 font-lg text-white bg-none">
           <Link href="/" title="Home" className="bg-gray-700 p-2  px-5 rounded-lg">Home</Link>
           <Link href="/about" title="About" className="bg-gray-700 p-2 px-5 rounded-lg">About</Link>
           <Link href="/contact" title="Contact Me" className="bg-gray-700 p-2 px-3 rounded-lg">Contact Me</Link>
       </div>
    )
}

export default Header