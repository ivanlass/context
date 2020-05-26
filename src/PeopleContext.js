import React, {useState, createContext} from 'react'


export const PeopleContext = createContext()


export const PeopleProvider = (props) => {
    const [people, setPeople] = useState([
        {
            name: "John",
            age: 33
        },
        {
            name: "Lisa",
            age: 36
        },
        {
            name: "Doe",
            age: 12
        }
    ])
    return(
        <PeopleContext.Provider value={[people, setPeople]}>
            {props.children}
        </PeopleContext.Provider>
    )
}