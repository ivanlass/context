import React, {useContext} from 'react'
import {PeopleContext} from './PeopleContext'


const Child = () => {
  const [people, setPeople] = useContext(PeopleContext)
    console.log(people)
    return(
        <p>alaj</p>
    )
}

export default Child