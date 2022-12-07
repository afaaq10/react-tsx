import React, { FC, useState, ChangeEvent } from 'react';


export enum HairColors {
    blonde = "i like it",
    black = "i love it",
    pink = "great one"
}

interface Props {
    name: string
    age: number
    isSet: boolean
    hairColor: HairColors


}

export const Person: FC<Props> = ({ name, age, hairColor }) => {

    const [first, setfirst] = useState<string | null>(null)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setfirst(e.target.value)


    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* {age}
            {name}
            {first} */}
            {/* <input type="text" onChange={handleChange} /> */}
            {hairColor}
        </div>
    );
}



