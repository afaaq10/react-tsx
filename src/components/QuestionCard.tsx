import React from 'react'
import { AnswerState } from '../App'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'
type QuestionCardProps = {

    questionNr: number;
    totalQuestions: number;
    question: string;
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswers: AnswerState | undefined
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    questionNr,
    totalQuestions,
    question,
    answers,
    callback,
    userAnswers
}) => {
    return (
        <>
            <b><p style={{ marginTop: '5px' }}>Questions: {questionNr}/{totalQuestions}</p></b>
            <Wrapper>
                <div style={{ marginTop: '9px' }} >
                    <span dangerouslySetInnerHTML={{ __html: question }}></span>

                </div>



                <div>
                    {answers.map((answer) => (
                        <ButtonWrapper
                            correct={userAnswers?.correct_answer === answer}
                            userClicked={userAnswers?.answer === answer}
                        >


                            <button disabled={userAnswers ? true : false} onClick={callback} value={answer}>  <span dangerouslySetInnerHTML={{ __html: answer }} /></button>

                        </ButtonWrapper>
                    ))}
                </div>

            </Wrapper>


        </>
    )
}

export default QuestionCard



















// import React from 'react'
// import { AnswerObject } from '../App'
// import { ButtonWrapper, Wrapper } from './QuestionCard.styles'
// type QuestionCardProps = {
//     questionNr: number;
//     totalQuestions: number
//     question: string
//     answers: string[]
//     callback: (e: React.MouseEvent<HTMLButtonElement>) => void
//     userAnswers: AnswerObject | undefined

// }


// const QuestionCard: React.FC<QuestionCardProps> = ({
//     questionNr,
//     totalQuestions,
//     question,
//     answers,
//     callback,
//     userAnswers


// }) => {
//     return (
//         <Wrapper>
//             <p>Question: {questionNr}/{totalQuestions}</p>

//             <p dangerouslySetInnerHTML={{ __html: question }} />

//             <div>
//                 {answers.map((answer) => (
//                     <ButtonWrapper
//                         correct={userAnswers?.correct_answer === answer}
//                         userClicked={userAnswers?.answer === answer}
//                     >


//                         <button disabled={userAnswers ? true : false} onClick={callback} value={answer}>  <span dangerouslySetInnerHTML={{ __html: answer }} /></button>

//                     </ButtonWrapper>
//                 ))}
//             </div>

//         </Wrapper>
//     )
// }

// export default QuestionCard