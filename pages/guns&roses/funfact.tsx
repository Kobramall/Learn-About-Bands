import React from "react"
import Header from "../Header"

const Fun = () =>{
    return(
        <div className="bg-gradient-to-br from-black to-gray-900">
        <Header />
        <div className=" flex flex-col items-center gun-fact-container min-h-screen min-w-full">
              <div className="gun-fact-card h-52 w-80 absolute bg-no-repeat border-8 text-transparent bg-black">
                <h3 className="text-lg mb-2">Best-selling debut album of all time</h3>
                Appetite For Destruction is Guns N’ Roses’ first album, released in 1987. It is also the best-selling debut album by any act ever. It has sold over 30 million copies and remains one of the greatest rock albums in history.</div>
              <div className="gun-fact-card h-52 w-80 absolute bg-no-repeat border-8 text-transparent">
                  <h3 className="text-lg mb-2">They never won a Grammy</h3>
                  Guns N’ Roses is one of the best-selling acts of all time. Their members are some of the most respected rockers ever. However, the band has not won a Grammy award. To be honest, they probably don’t care either. 
              </div>
              <div className="gun-fact-card h-52 w-80 absolute bg-no-repeat border-8 text-transparent">
                    <h3 className="text-lg mb-2">Before Joining, Axl Rose was Broke</h3>
                    Axl Rose was so broke before joining the band Guns N Roses that he joined a UCLA medical study where he had to smoke cigarettes and for this he was paid $8.
              </div>
              <div className="gun-fact-card h-52 w-80 absolute bg-no-repeat border-8 text-transparent">
                    <h3 className="text-lg mb-2">Saul Hudson Loved Sankes</h3>
                    The former lead guitarist of Saul Hudson who is better known by his stage name Slash had unique pets. He had more than 20 pet snakes!
              </div>
              <div className="gun-fact-card h-52 mt-3 w-80 absolute bg-no-repeat border-8 text-transparent">
                <h3 className="text-lg mb-2">The 5 minute song</h3>
                Guns N Roses’s biggest hit song “Sweet Child O’ Mine” was written in just 5 minutes!
              </div>
        </div>
        </div>
    )
}

export default Fun