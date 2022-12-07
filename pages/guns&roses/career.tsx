import React from "react"
import Header from "../Header"
import Image from "next/image"
import Img from "../../public/fbStart.jpg"

const Career = () => {
  
  return(
    <div className="flex-col text-center bg-gradient-to-tr from-green-700 to-black min-h-screen text-white ">
    <Header />
    <h3 className="text-3xl pt-3 mb-2">How It Start</h3>
    <div className="flex text-center">
        <div className=" flex shadow-2xl p-2 text-xl bg-gradient-to-tr from-black to-green-700">
          <Image src="https://www.ultimate-guitar.com/static/article/news/5/67075_0_wide_ver1506045999.jpg" width={500} height={300} alt="band photo"/>
          <p className="p-2 mt-5">When we started, we were the worst band ever, playing the worst music you have ever heard said Pete Wentz of himslef and his band members. The band had very humble beginnings in Wilmette Illnois.  
            Pete Wentz and Joe Trohman tried their hand at a metal band but were unsuccesful. They joked about starting new pop punk band but soon it would no longer be a joke but reality.
            By what seemed like fate Joe over heard Patrick Stump talk about a band an jumped in the conversation. They agreed to meet up and practice and so the roots of the band were formed over a mutal love for Neurosis.
            After that it was a matter of finding a drummer. Luckly Patrick knew Andy Hurley who joined on. As Pete said they made have been bad at first but with work and decatiction, they would become one of the most up and coming bands in the nation 
         </p>
        </div>
    </div>
    <h3 className="text-3xl pt-3 mb-2">Early Career</h3>
    <div className="flex text-center">
      <div className=" flex shadow-2xl p-2 text-xl bg-gradient-to-tr from-black to-green-700">
        <Image src="https://images.kerrangcdn.com/2021/06/Guns-N-Roses-live-press-shot-2021.jpg?auto=compress&fit=crop&w=1008" width={500} height={300} alt="band photo"/>
        <p className="p-2 mt-5">When we started, we were the worst band ever, playing the worst music you have ever heard said Pete Wentz of himslef and his band members. The band had very humble beginnings in Wilmette Illnois.  
         Pete Wentz and Joe Trohman tried their hand at a metal band but were unsuccesful. They joked about starting new pop punk band but soon it would no longer be a joke but reality.
         By what seemed like fate Joe over heard Patrick Stump talk about a band an jumped in the conversation. They agreed to meet up and practice and so the roots of the band were formed over a mutal love for Neurosis.
         After that it was a matter of finding a drummer. Luckly Patrick knew Andy Hurley who joined on. As Pete said they made have been bad at first but with work and decatiction, they would become one of the most up and coming bands in the nation 
        </p>
       </div>
    </div>
    <h3 className="pt-3 text-3xl mb-2">Late Career</h3>
    <div className="flex text-center">
      <div className=" flex shadow-2xl p-2 text-xl mb-9 bg-gradient-to-tr from-black to-green-700 ">
        <Image src="https://www.rockhall.com/sites/default/files/styles/c03g_desktop_1920_870/public/2019-11/Hero_GunsNRoses_photoGettyWireImage.jpg?h=4e8381a5&itok=HGhds3YC" width={500} height={300} alt="band photo"/>
        <p className="p-2 mt-5">When we started, we were the worst band ever, playing the worst music you have ever heard said Pete Wentz of himslef and his band members. The band had very humble beginnings in Wilmette Illnois.  
         Pete Wentz and Joe Trohman tried their hand at a metal band but were unsuccesful. They joked about starting new pop punk band but soon it would no longer be a joke but reality.
         By what seemed like fate Joe over heard Patrick Stump talk about a band an jumped in the conversation. They agreed to meet up and practice and so the roots of the band were formed over a mutal love for Neurosis.
         After that it was a matter of finding a drummer. Luckly Patrick knew Andy Hurley who joined on. As Pete said they made have been bad at first but with work and decatiction, they would become one of the most up and coming bands in the nation 
        </p>
       </div>
    </div>
</div>
)
}


export default Career