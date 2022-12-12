import React from "react"
import Header from "../Header"

const Fun = () =>{
    return(
        <div className="bg-gradient-to-br from-black to-gray-900">
        <Header />
        <div className=" flex flex-col items-center nirvana-fact-container min-h-screen min-w-full">
              <div className="nirvana-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                <h3 className="text-lg mb-2">Food Fight</h3>
                They got thrown out of their own record release party for “Nevermind” because they started a food fight.
              </div>
              <div className="nirvana-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                    <h3 className="text-lg mb-2">Janitor Music Video</h3>
                    In the “Smells Like Teen Spirit” music video, the janitor is a reference to Kurt Cobain’s old job at his old high school.
              </div>
              <div className="nirvana-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                 <h3 className="text-lg mb-2">Number #1 Fan</h3>
                   Kurt Cobain was a big John Lennon fan. 
              </div>
              <div className="nirvana-fact-card h-52 w-80 absolute bg-no-repeat border-8">
                <h3 className="text-lg mb-2">Title Change</h3>
                The original title for “Heart Shaped Box” was “Heart Shaped Coffin.”
              </div>
              <div className="nirvana-fact-card mt-3 h-52 w-80 absolute bg-no-repeat border-8">
                 <h3 className="text-lg mb-2">Smells Like Teen Spirit</h3>
                  The song name came because Kurt's girlfriend wrote him a note that said "Kurt smells like teen spirit", which was reference to her deodorant that kurt smelled like from spend all day with her 
              </div>
        </div>
        </div>
    )
}

export default Fun