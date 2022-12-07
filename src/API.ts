import { shuffArray } from "./utils";


export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}


export type QuestionState = {
    category: string;
    correct_answer: string;
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string

}

export type AnswerObject = QuestionState & { answers: string[] }


export const fetchQuizApi = async (amount: number, difficulty: Difficulty) => {
    const data = await (await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)).json()

    return data.results.map((question: QuestionState) => {

        return {

            ...question,
            answers: shuffArray([...question.incorrect_answers, question.correct_answer])

        }

    }
    )

}

































// import { shuffArray } from "./utils";

// export enum Difficulty {
//     EASY = 'easy',
//     MEDIUM = 'medium',
//     HARD = 'hard'
// }


// export type Question = {
//     category: string;
//     correct_answer: string;
//     difficulty: string;
//     incorrect_answers: string[];
//     question: string;
//     type: string;

// }

// export type QuestionState = Question & { answers: string[] }


// export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {

//     const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
//     const data = await (await fetch(endpoint)).json();

//     // console.log(data.results)
//     return data.results.map((question: Question) =>


//     (
//         {



//             ...question,
//             answers: shuffArray([...question.incorrect_answers, question.correct_answer])




//         }
//     )



//     )
// }