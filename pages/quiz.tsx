import React, {useState} from 'react'

const Quiz = (props) =>{
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [ message, setMessage] = useState('');
   const [ isDisabled, setIsDisabled] = useState(false)
   const [ score, setScore] = useState(0)
   
   const nextQuestion = () =>{
        setCurrentQuestion(currentQuestion + 1);
        setIsDisabled(false);
        setMessage('');
   }

   const answerSelected = (answer) =>{
     setIsDisabled(true);
    if(answer){
         setMessage('Correct');
         setScore(score + 1);
     }else{
        setMessage('Incorrect');
      }
   }
    
   const dummyData = [
        {question: "Am I Awesome?",
        answerOptions: [
            { id:1, answerText: '1. Of course', isCorrect: true},
            {id:2,  answerText: '2. Yes', isCorrect: false},
            {id:3, answerText: '3. Yeah', isCorrect: false},
            {id:4, answerText: '4. No doubt', isCorrect: false}
        ]
    }, {question: "Do you like music?",
    answerOptions: [
        {id:1, answerText: '1. Of course', isCorrect: true},
        {id:2, answerText: '2. Yes', isCorrect: false},
        {id:3, answerText: '3. no', isCorrect: false},
        {id:4, answerText: '4. maybe', isCorrect: false}
    ]
}, {question: "Do you like my website?",
answerOptions: [
    {id:1, answerText: '1. Some of it', isCorrect: true},
    {id:2, answerText: '2. Probably', isCorrect: false},
    {id:3, answerText: '3. Yeah', isCorrect: false},
    {id:4, answerText: '4. No doubt', isCorrect: false}
]
},
{question: "Am I Awesome?",
answerOptions: [
    { id:1, answerText: '1. Of course', isCorrect: true},
    {id:2,  answerText: '2. Yes', isCorrect: false},
    {id:3, answerText: '3. Yeah', isCorrect: false},
    {id:4, answerText: '4. No doubt', isCorrect: false}
]
}
    ]


    return(
         currentQuestion <= 3 ? 
        <div className='flex flex-col justify-evenly text-center content-center bg-gradient-to-t from-blue-300 to-blue-600  text-white min-h-screen min-w-full shadow-2xl'>
        <h1 className='text-lg'>{message}</h1>
        <h1 className='text-6xl'>{dummyData[currentQuestion].question}</h1>
        <div className='flex justify-evenly text-lg'>
        {dummyData[currentQuestion].answerOptions.map((question) =>{
            return <button className='border-4  border-black p-2 text-black' disabled={isDisabled} onClick={()=>{answerSelected(question.isCorrect)}} key={question.id}>{question.answerText}</button>
        })}
        </div>
        <h1><button className='text-xl border-4 border-black text-black w-24' onClick={nextQuestion} disabled={!isDisabled}>Next</button></h1>
        </div> : <div>{score}</div>
    )
}

export default Quiz