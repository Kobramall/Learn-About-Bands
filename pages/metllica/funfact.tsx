import React from "react"
import Header from "../Header"

const Fun = () =>{
    return(
        <div className="bg-gradient-to-br from-black to-gray-900">
        <Header />
        <div className=" flex flex-col items-center metllica-fact-container min-h-screen min-w-full">
              <div className="metllica-fact-card h-52 w-80 absolute bg-no-repeat border-8"></div>
              <div className="metllica-fact-card h-52 w-80 absolute bg-no-repeat border-8"></div>
              <div className="metllica-fact-card h-52 w-80 absolute bg-no-repeat border-8"></div>
              <div className="metllica-fact-card h-52 w-80 absolute bg-no-repeat border-8"></div>
              <div className="metllica-fact-card h-52 w-80 absolute bg-no-repeat border-8"></div>
        </div>
        </div>
    )
}

export default Fun