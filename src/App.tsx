import React from 'react'
import { fetchQuizApi, QuestionState } from './API'
import { Difficulty } from './API'

import { AnswerObject } from './API'
import QuestionCard from './components/QuestionCard'

export type AnswerState = {
  question: string;
  answer: string;
  correct: boolean;
  correct_answer: string;
}
const TOTAL_QUESTIONS = 10
const App = () => {


  const [loading, setLoading] = React.useState(false)

  const [questions, setQuestions] = React.useState<AnswerObject[]>([])

  const [number, setNumber] = React.useState(0)

  const [score, setScore] = React.useState(0)

  const [userAnswers, setUserAnswers] = React.useState<AnswerState[]>([])

  const [gameover, setGameOver] = React.useState(true)

  const startTrivia = async () => {
    setLoading(true)
    const response = await fetchQuizApi(TOTAL_QUESTIONS, Difficulty.MEDIUM)
    setQuestions(response)
    setLoading(false)
    setScore(0)
    setNumber(0)
    setUserAnswers([])
    setGameOver(false)

  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const userClick = e.currentTarget.value
    if (userClick == questions[number].correct_answer) {
      setScore((prev) => prev + 1)
    }

    const answerStateDec: AnswerState = {
      question: questions[number].question,
      answer: userClick,
      correct: true,
      correct_answer: questions[number].correct_answer

    }

    setUserAnswers((prev) => [...prev, answerStateDec])
  }

  const nextQuestion = () => {

    const updateNumber = number + 1
    if (updateNumber == TOTAL_QUESTIONS) {
      setGameOver(true)
    }
    else {
      setNumber(updateNumber)

    }


  }



  console.log(userAnswers.length)
  console.log("The number is ", number)
  return (
    <>




      <button onClick={startTrivia} style={{ border: '2px solid black' }}>Start Quiz </button>
      {/* {!gameover && <b><p style={{ marginTop: '10px' }} >Score: {score}</p></b>} */}
      {loading && gameover && <p>Loading...</p>}


      {!gameover && !loading && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          callback={checkAnswer}
          userAnswers={userAnswers ? userAnswers[number] : undefined} />
      )
      }




      {!gameover && !loading && userAnswers.length === number + 1 && number != TOTAL_QUESTIONS - 1 ? (
        <button style={{ border: '2px solid black', background: 'pink', marginTop: '15px' }} onClick={nextQuestion}>Next question</button>

      ) : null}


      {userAnswers.length == 10 ? (
        <>

          <p style={{ marginTop: '12px' }}> Answers you submitted : </p>
          {userAnswers.map((x) => <b><p> {x.answer}</p></b>)}
          <p style={{ marginTop: '10px' }} > Your final score is : <b>{score}</b></p>

        </>







      ) : null}


    </>
  )
}

export default App






























// import * as React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import QuestionCard from './components/QuestionCard';
// import { fetchQuizQuestions, QuestionState } from './API'
// import { Difficulty } from './API';


// export type AnswerObject = {
//   question: string;
//   answer: string;
//   correct: boolean;
//   correct_answer: string;
// }
// const TOTAL_QUESTIONS = 10


// const App = () => {


//   const [loading, setLoading] = React.useState(false)

//   const [questions, setQuestions] = React.useState<QuestionState[]>([])

//   const [number, setNumber] = React.useState(0)

//   const [score, setScore] = React.useState(0)

//   const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([])

//   const [gameover, setGameOver] = React.useState(true)

//   console.log("The questions are: ", questions)




//   const startTrivia = async () => {
//     setLoading(true)

//     const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM)
//     setQuestions(newQuestions)
//     setUserAnswers([])


//     setGameOver(false)
//     setNumber(0)
//     setScore(0)
//     setLoading(false)

//   }


//   const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
//     if (!gameover) {
//       const answer = e.currentTarget.value
//       const answerMatch = questions[number].correct_answer == answer
//       if (answerMatch) setScore((prev) => prev + 1)


//       const answerObject: AnswerObject = {
//         question: questions[number].question,
//         answer: answer,
//         correct: true,
//         correct_answer: questions[number].correct_answer,
//       }

//       setUserAnswers((prev) => [...prev, answerObject])
//     }

//   }


//   const nextQuestion = () => {

//     const nextQuestion = number + 1

//     if (nextQuestion == TOTAL_QUESTIONS) {
//       setGameOver(true)

//     }
//     else {
//       setNumber(nextQuestion)
//     }


//   }




//   return (
//     <>
//       <h1>React Quiz</h1>
//       {

//         gameover || userAnswers.length === TOTAL_QUESTIONS ? <button style={{ border: '2px solid black', background: 'pink' }} onClick={startTrivia}>Start Quiz</button> : null
//       }


//       {!gameover ? <p>Score:{score} </p> : null}
//       {loading && <p>Loading questions...</p>}

//       {!gameover && !loading && (
//         <QuestionCard
//           questionNr={number + 1}
//           totalQuestions={TOTAL_QUESTIONS}
//           question={questions[number].question}
//           answers={questions[number].answers}
//           callback={checkAnswer}
//           userAnswers={userAnswers ? userAnswers[number] : undefined} />

//       )}


//       {!gameover && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
//         <button style={{ border: '2px solid black', background: 'pink', marginTop: '15px' }} onClick={nextQuestion}>Next question</button>

//       ) : null}
//     </>


//   );
// };

// export default App;

