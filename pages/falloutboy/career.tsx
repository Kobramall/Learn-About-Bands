import React from "react"
import Header from "../Header"
import Image from "next/image"
import Img from "../../public/fbStart.jpg"


const Career = () => {
  
  return(
  <div className="flex-col text-center bg-gradient-to-tr from-blue-900 to-black min-h-screen text-white ">
       <Header />
       <h3 className="text-xl p-2">How It Start</h3>
       <div className=" flex text-center">
           <Image src={Img} width={400} height={400} alt="" />
           <p>When we started, we were the worst band ever, playing the worst music you have ever heard said Pete Wentz of himslef and his band members. The band had very humble beginnings in Wilmette Illnois.  
            Pete Wentz and Joe Trohman tried their hand at a metal band but were unsuccesful. They joked about starting new pop punk band but soon it would no longer be a joke but reality.
            By what seemed like fate Joe over heard Patrick Stump talk about a band an jumped in the conversation. They agreed to meet up and practice and so the roots of the band were formed over a mutal love for Neurosis.
            After that it was a matter of finding a drummer. Luckly Patrick knew Andy Hurley who joined on. As Pete said they made have been bad at first but with work and decatiction, they would become one of the most up and coming bands in the nation 
           </p>
       </div>
       <h3>Early Career</h3>
       <div>
          <p></p>
          <Image src="" alt="" />
       </div>
       <h3>Late Career</h3>
       <div>
         <Image src="" alt="" />
         <p></p>
       </div>
   </div>
  )
}


export default Career