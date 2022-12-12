import React from "react"
import Header from "../Header"

const Fun = () =>{
    return(
        <div className="bg-gradient-to-br from-black to-gray-900">
        <Header />
        <div className=" flex flex-col items-center metllica-fact-container min-h-screen min-w-full text-transparent">
              <div className="metllica-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                <h3 className="text-lg mb-2">Big Bucks</h3>
                Drummer Lars Ulrich is officially the world’s richest metal drummer. The lucrative title comes partly as a result of the sales of Metallica’s first three albums, which netted him more than $12 million.
              </div>
              <div className="metllica-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                 <h3 className="text-lg mb-2">World Wide</h3>
                 Metallica set a Guinness World Record for becoming the first musical act to perform on every continent. The band headed to Antartica in 2013 to perform at Carlini Base. Metallica and Coca-Cola organized a competition for fans to win tickets.
              </div>
              <div className="metllica-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                <h3 className="text-lg mb-2">The Beast</h3>
                Hetfield spends some of his spare time as a mechanic, with a focus on classic cars. One of Hetfield’s favorites is a Chevy Blazer called “The Beast.” The Beast is reportedly outfitted to survive earthquakes and nuclear blasts.
              </div>
              <div className="metllica-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                <h3 className="text-lg mb-2">Opinion Free</h3>
                    Hetfield has openly stated his distaste for expressing political opinions in music. Hetfield believes that a musician’s popularity poses the risk of making their opinion seem more valid.
              </div>
              <div className="metllica-fact-card mt-3 h-52 w-80 absolute bg-no-repeat border-8">
                <h3 className="text-lg mb-2">Voice Acting</h3>
                Later in their careers, James Hetfield and Lars Ulrich tried their hand at voice acting. The two played dragons in a 2004 episode of Dave the Barbarian titled, “Here There Be Dragons.”
              </div>
        </div>
        </div>
    )
}

export default Fun