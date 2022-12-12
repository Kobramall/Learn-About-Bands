import React from "react"
import Header from "../Header"

const Fun = () =>{
    return(
        <div className="bg-gradient-to-br from-black to-gray-900">
        <Header />
        <div className=" flex flex-col items-center fall-fact-container min-h-screen min-w-full text-transparent">
              <div className="fall-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                <h3 className="text-lg mb-2">Music Awards</h3>
                Patrick Stump was named Best Singer at the Alternative Press Music Awards in 2015, among other accolades.
              </div>
              <div className="fall-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                <h3 className="text-lg mb-2">World Record</h3>
                Pete and Patrick own the world record for the most interviews conducted in 24 hours by a pair. Within 24 hours, they conducted 74 interviews with radio DJs.
              </div>
              <div className="fall-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                <h3 className="text-lg mb-2">Stitches in Stage</h3>
                When Pete was hit above the eye by his guitar, Joe had to sew him up.
              </div>
              <div className="fall-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                <h3 className="text-lg mb-2">Blood Autographs</h3>
                They once distributed posters autographed by their blood to boost attention for blood donations for Hurricane Katrina sufferers in 2005.
              </div>
              <div className="fall-fact-card h-52 w-80 mt-3 absolute bg-no-repeat border-8">
                <h3 className="text-lg mb-2">Song Name Change</h3>
                "A Little Less Sixteen Candles, a Little More Touch" Me was originally called "A Little Less Molly Ringwald, a Little More Samantha Fox" 
              </div>
        </div>
        </div>
    )
}

export default Fun