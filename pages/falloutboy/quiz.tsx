import React from 'react'
import Quiz from '../quiz'
import Header from '../Header'

const QuizContainer = () =>{

    return(
        <div className='flex flex-col items-center bg-black'>
            <div className='w-full p-2 mb-2'>
              <Header />
            </div>
            <div className='w-10/12 h-full'>
              <Quiz />
            </div>
        </div>
    )
}

export default QuizContainer