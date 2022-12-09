import React from 'react';
import SlideShow from '../slideShow';
import Header from '../Header';

const Stats = () =>{

   const imageURLs = ['https://cdn.pixabay.com/photo/2016/02/17/04/09/backround-1204441__340.jpg', 
   'https://thumbs.dreamstime.com/b/blue-abstract-backround-blur-effect-blue-abstract-backround-117426484.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9HrCMc5JqnQItS3IWLjBMNHVZqXCAgZf2g&usqp=CAU'
 ]
    
    return(
       <div className='bg-gradient-to-br from-black to-gray-900 min-h-screen'>
          <Header />
          <SlideShow images={imageURLs} />
       </div>
    )
}

export default Stats