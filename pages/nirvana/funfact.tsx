import React from "react"
import Header from "../Header"

const Fun = () =>{
    return(
        <div className="bg-gradient-to-br from-black to-gray-900">
        <Header />
        <div className=" flex flex-col items-center nirvana-fact-container min-h-screen min-w-full">
              <div className="nirvana-fact-card h-52 w-80 absolute bg-no-repeat border-8">Did it work?</div>
              <div className="nirvana-fact-card h-52 w-80 absolute bg-no-repeat border-8"></div>
              <div className="nirvana-fact-card h-52 w-80 absolute bg-no-repeat border-8"></div>
              <div className="nirvana-fact-card h-52 w-80 absolute bg-no-repeat border-8"></div>
              <div className="nirvana-fact-card h-52 w-80 absolute bg-no-repeat border-8"></div>
        </div>
        </div>
    )
}

export default Fun