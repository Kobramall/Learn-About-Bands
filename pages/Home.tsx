import React from "react";
import Link from "next/link"


const HomePage = () =>{
    
    return(
        <main>
        <section className='min-h-screen'>
          <div className='card-group'> 
            
            <div className='big-card card'>

            </div>
            <div className='big-card card'>

            </div>
            <div className='big-card card'>

            </div>
            <div className='big-card card'>

            </div>
            <Link href="/falloutboy/falloutboy" className='little-card card'>
           
            </Link>
            <Link href="/nirvana/nirvana" className='little-card card'>

            </Link>
            <Link href="/metllica/metllica" className='little-card card'>

            </Link>
            <Link href="/guns&roses/guns&roses" className='little-card card'>

            </Link>
            <h2 className="text-white">Click A Logo To Learn More</h2>
            </div>
          </section>
      </main>
    )
};

export default HomePage