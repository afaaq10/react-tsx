import React, { useState } from 'react'
// import '../App.css';

// interface Props {
//     text: string;
//     setText: React.Dispatch<React.SetStateAction<string>>;

//     // handleAdd: () => void;
// }


const InputField: React.FC = () => {
    // const [arr, setArr] = React.useState<text[]>([])



    // const handleClick = (e: any) => {


    //     if (text) {
    //         setArr([...arr, { text: text, id: Date.now(), isDone: false }])
    //         setText("")
    //     }

    // }



    // const handleDelete = (index: number) => {

    //     setArr(arr.filter((e, id) => e.id !== index))

    // }

    // const handleDone = (index: number) => {

    //     setArr(arr.map((e, id) => e.id == index ? { ...arr, isDone: !e.isDone } : e))







    // }


    return (
        <>

            {/* 
            <button onClick={handleClick} style={{ width: "35px", background: 'pink', margin: '5px', padding: '2px' }}>Add</button>



            {arr.map((e, index: number) => {


                return (
                    <div style={{ display: 'flex', margin: '5px' }}>


                        <p >{e.text}</p>


                        {e.isDone ? (
                            <s>{e.text}</s>
                        ) : (
                            <p>{e.text}</p>
                        )

                        }

                        <button onClick={() => handleDelete(e.id)} style={{ width: "48px", background: 'pink', margin: '5px', padding: '2px' }}>Delete</button>

                        <button onClick={() => handleDone(e.id)} style={{ width: "48px", background: 'pink', margin: '5px', padding: '2px' }}>Done</button>

                    </div>
                )
            }
            )} */}
        </>
    )
}

export default InputField














































// // interface Props {
// //     todo: string;
// //     setTodo: React.Dispatch<React.SetStateAction<string>>
// //     handleAdd: () => void

// // }
// // const InputField = ({ todo, setTodo, handleAdd }) => {



// //     const inputRef = React.useRef(null);
// //     React.useEffect(() => {
// //         inputRef.current.focus();
// //     }, []);



// //     const Change = (e) => {
// //         setTodo(e.target.value)
// //     }

// //     const arr = [1, 2, 4]


// //     return (
// //         <div className="App" >

// //             <form onSubmit={handleAdd}>

// //                 <input type="text" placeholder="enter your note" onChange={Change} value={todo}
// //                     ref={inputRef}
// //                 />
// //                 <button  >Add</button>
// //             </form>


// //         </div>
// //     )
// // }



// // export default InputField




// import React from 'react'

// const InputField = () => {

//     interface hasAge {
//         age: number
//     }

//     const getFunc = (people: hasAge[]) => {
//         return people.sort((a, b) => b.age - a.age)



//     }

//     const people = [
//         {
//             age: 22
//         },
//         {
//             age: 16
//         },
//         {
//             age: 12
//         },
//         {
//             age: 5
//         },
//         {
//             age: 65
//         },
//         {
//             age: 15
//         }
//     ]
//     console.log('Oldest person is of the age :', getFunc(people)[0].age)




//     interface Icredentials {
//         age: number;
//         name: string;
//         id: number
//     }



//     const getAsync = (credentials: Icredentials) => {
//         console.log(credentials)
//         return true


//     }

//     const user = {
//         age: 33,
//         name: 'afaaq',
//         id: 22

//     }



//     getAsync(user)

//     return (
//         <div>InputField</div>
//     )
// }

// export default InputField
