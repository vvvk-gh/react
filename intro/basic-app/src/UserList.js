import React from 'react'
import Person from './Person'

function UserList() {
    //let users = ['vamsi' ,'sai' ,'abhi'];
    let persons = [
        {id: 1,
         name : 'vamsi',
         age : 23,
         occupation : 'Software Engineer'
        },
        {
            id: 2,
            name : 'abhi',
            age : 27,
            occupation: 'Software Engineer'
        },
        {
            id :3,
            name : 'sai',
            age : 24,
            occupation : 'Software Engineer'
        },
    ];
    return (
        <div>
            {/* <h2>{users[0]}</h2>
            <h2>{users[1]}</h2>
            <h2>{users[2]}</h2> */}
            {/* {users.map(user => <h2>{user}</h2>)} */}

            {persons.map(person => <Person perAttr={person}/>)}

        </div>
    )
}

export default UserList
